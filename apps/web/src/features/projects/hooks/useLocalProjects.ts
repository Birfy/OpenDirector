import { useCallback, useEffect, useRef, useState } from 'react';
import { errorMessage, json, request, sessionId } from '../../../lib/api';
import { closeConversation, saveBeforePageHide } from '../../assistant/storage';
import type { Project, ProjectList } from '../types';
import type { NewProjectMessage } from '../../assistant/types';

export function useLocalProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = useRef<string | null>(null);
  const [notice, setNotice] = useState('');
  const [warnings, setWarnings] = useState<string[]>([]);
  const [loadFailed, setLoadFailed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [creating, setCreating] = useState(false);
  const creatingRef = useRef(false);
  const listingVersion = useRef(0);
  const activity = useRef(new Set<string>());
  const setActivity = useCallback((value: boolean, source = 'assistant') => { if (value) activity.current.add(source); else activity.current.delete(source); }, []);

  const refresh = useCallback(async () => {
    const version = listingVersion.current;
    try {
      const result = await request<ProjectList>('/projects');
      if (version === listingVersion.current) setProjects(result.projects);
      setWarnings(result.warnings); setLoadFailed(false);
    }
    catch (error) { setLoadFailed(true); setNotice(errorMessage(error)); throw error; }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { void refresh().catch(() => {}); }, [refresh]);

  useEffect(() => {
    const heartbeat = () => { if (active.current) void request(`/sessions/${sessionId}`, json('PUT', { projectId: active.current })).catch(error => setNotice(errorMessage(error))); };
    const timer = window.setInterval(heartbeat, 15000);
    const release = () => saveBeforePageHide(active.current);
    window.addEventListener('pagehide', release);
    return () => { clearInterval(timer); window.removeEventListener('pagehide', release); };
  }, []);

  async function closeProject() {
    if (creatingRef.current) throw new Error('正在创建项目，请稍候。');
    if (activity.current.size) throw new Error('请先停止回复或等待当前保存、资产操作完成，再关闭项目。');
    if (active.current) await closeConversation(active.current);
    active.current = null; setActiveId(null);
  }

  async function activateProject(project: Project) {
    if (creatingRef.current) throw new Error('正在创建项目，请稍候。');
    if (!active.current && activity.current.size) throw new Error('请先等待当前操作完成，再切换项目。');
    if (active.current === project.id) return;
    if (active.current) await closeProject();
    const opened = await request<Project>(`/projects/${project.id}/open`, { method: 'POST' });
    active.current = opened.id; setActiveId(opened.id); setNotice('');
    await refresh();
  }

  async function createProject(name: string, id: string) {
    if (creatingRef.current || (!active.current && activity.current.size)) throw new Error('请先等待当前操作完成，再创建项目。');
    if (active.current) await closeProject();
    const project = await request<Project>('/projects', json('POST', { name, id }));
    active.current = project.id; setActiveId(project.id); setNotice('');
    await refresh();
  }

  async function createFromMessage({ id, turnId, modelId, conversation }: NewProjectMessage) {
    if (creatingRef.current || active.current || busy) throw new Error('项目状态已变化，请核对后重新发送。');
    creatingRef.current = true; setCreating(true); setNotice('');
    try {
      const { draft, draftContent, assets, thinking, modelSelections } = conversation;
      const project = await request<Project>('/projects/from-message', json('POST', { id, turnId, modelId, draft, draftContent, assets, thinking, modelSelections }));
      // Accept the created project without another request that could turn a
      // successful creation into a failure and discard the first-message handoff.
      active.current = project.id;
      listingVersion.current += 1;
      setProjects(current => [project, ...current.filter(item => item.id !== project.id)]);
      setActiveId(project.id);
      return project;
    } finally { creatingRef.current = false; setCreating(false); }
  }

  async function renameProject(project: Project, name: string) {
    await request(`/projects/${project.id}`, json('PATCH', { name, expectedName: project.name }));
    await refresh();
  }

  async function run(action: () => Promise<unknown>) {
    if (busy) return;
    setBusy(true); setNotice('');
    try { await action(); }
    catch (error) { setNotice(errorMessage(error)); }
    finally { setBusy(false); }
  }

  return { projects, activeId, activeProject: projects.find(project => project.id === activeId), notice, setNotice, warnings, loadFailed,
    loading, busy: busy || creating, refresh, activateProject, createProject, createFromMessage, renameProject, closeProject, run,
    setActivity };
}
