import { operationFeedback, type Feedback } from '../../lib/feedback';
import { useEffect, useRef, useState } from 'react';
import { errorMessage, json, request } from '../../lib/api';
import type { Message } from './types';
import type { GenerationTask } from '../canvas/types';
import type { ProjectAsset } from '../assets/types';

export type ProductionAction = 'resume' | 'stop' | 'cancel';
export const ACTION_LABELS: Record<ProductionAction, string> = { resume: '按原设置继续', stop: '停止后续制作', cancel: '取消已提交任务' };
const BUSY: Record<ProductionAction, string> = { resume: '正在核对已有结果并继续制作…', stop: '正在停止后续制作…', cancel: '正在取消生成任务…' };
interface Failure { stage: string; requestId: string | null; providerCode: string | null; httpStatus: number | null }
export interface ReferenceDifference { shotId: string; title: string; asset: ProjectAsset; sourceNodeId: string | null; sourceRevision: number | null; videoAssetId: string; usedVersion: number | null; currentAssetId: string | null; currentName: string | null; currentVersion: number | null; available: boolean; message: string }
export interface ProgressStep { id: string; shotId: string; shotTitle: string; nodeId: string | null; title: string; state: string; status: string; generated: boolean; adopted: boolean; nextAction: string; error: string | null; technicalCheck?: GenerationTask['technicalCheck']; adoption?: GenerationTask['storyboardAdoption'] }
export interface ProductionMessage {
  id: string; planId: string; role: 'user' | 'assistant'; text: string; afterMessageId: string | null;
  pending?: boolean; error?: string | null; current?: boolean; primary?: boolean; createdAt?: string;
  snapshot?: { planId: string; text: string; status: string; errorDetails: Failure | null;
    script?: { assetId: string; name: string; fingerprint: string | null };
    title?: string; label?: string; work?: { title: string; label: string; generated: number; adopted: number; total: number; unit: string };
    delivery?: { text: string; ready: boolean; readyShots: number; totalShots: number; previewAvailable: boolean; exportAvailable: boolean; problems: string[]; note: string };
    candidateCount?: number; activeCount?: number; issueCount?: number; nextAction?: string; referenceDifferences?: ReferenceDifference[];
    actions: ProductionAction[]; completed: number; total: number; steps: ProgressStep[] };
}
interface Journal { version: 1; messages: ProductionMessage[] }

export function mergeProductionMessages(messages: Message[], production: ProductionMessage[]): (Message | ProductionMessage)[] {
  const result: (Message | ProductionMessage)[] = [];
  const anchors = new Set(messages.map(message => message.id));
  const grouped = new Map<string | null, ProductionMessage[]>();
  for (const message of production) {
    const anchor = message.afterMessageId && anchors.has(message.afterMessageId) ? message.afterMessageId : null;
    grouped.set(anchor, [...(grouped.get(anchor) ?? []), message]);
  }
  result.push(...(grouped.get(null) ?? []));
  for (const message of messages) result.push(message, ...(grouped.get(message.id) ?? []));
  return result;
}

export function useProductionChat(projectId: string | null) {
  const [messages, setMessages] = useState<ProductionMessage[]>([]);
  const [error, setError] = useState('');
  const [actionIssue, setActionIssue] = useState<Feedback | undefined>();
  const [busy, setBusy] = useState(false);
  const endpoint = `/projects/${projectId}/production-chat`;
  const pending = useRef(false);
  const consumed = useRef(new Set<string>());
  const operation = useRef(0);
  const alive = useRef(false);
  const uncertain = useRef<ProductionMessage[] | null>(null);
  function receive(journal: Journal) {
    if (uncertain.current && journal.messages.some(message => message.id === uncertain.current!.at(-1)?.id)) {
      uncertain.current = null; setActionIssue(undefined);
    }
    setMessages([...journal.messages, ...(uncertain.current ?? [])]);
  }
  useEffect(() => {
    alive.current = true; operation.current += 1; pending.current = false;
    consumed.current.clear(); uncertain.current = null;
    setMessages([]); setError(''); setActionIssue(undefined); setBusy(false);
    const abort = new AbortController(); let timer: number;
    async function poll() {
      const ticket = operation.current;
      try {
        if (!projectId || pending.current) return;
        const journal = await request<Journal>(endpoint, { signal: abort.signal });
        if (!abort.signal.aborted && ticket === operation.current) { receive(journal); setError(''); }
      } catch (failure) { if (!abort.signal.aborted && ticket === operation.current) setError(errorMessage(failure)); }
      finally { if (!abort.signal.aborted && projectId) timer = window.setTimeout(() => void poll(), 1500); }
    }
    void poll();
    return () => { alive.current = false; operation.current += 1; abort.abort(); clearTimeout(timer); };
  }, [endpoint, projectId]);
  const latest = new Map(messages.filter(message => message.role === 'assistant').map(message => [message.planId, message]));
  async function act(message: ProductionMessage, action: ProductionAction, afterMessageId: string | null) {
    if (!projectId || pending.current || consumed.current.has(message.id) || latest.get(message.planId)?.id !== message.id || message.pending) return;
    pending.current = true; consumed.current.add(message.id); operation.current += 1;
    const ticket = operation.current;
    setBusy(true); setError(''); setActionIssue(undefined); uncertain.current = null;
    const id = crypto.randomUUID();
    const optimistic: ProductionMessage[] = [
      { id: `user:${id}`, planId: message.planId, role: 'user', text: ACTION_LABELS[action], afterMessageId },
      { id, planId: message.planId, role: 'assistant', text: BUSY[action], pending: true, afterMessageId }];
    setMessages(current => [...current, ...optimistic]);
    try {
      const journal = await request<Journal>(`${endpoint}/actions`, json('POST', { id, messageId: message.id, action }));
      if (alive.current && ticket === operation.current) receive(journal);
    } catch (failure) {
      if (alive.current && ticket === operation.current) {
        // A lost response may already have consumed the button. Read receipts;
        // never automatically resend an operation that could generate media.
        const issue = operationFeedback(failure);
        setActionIssue(issue);
        if (issue.kind === 'uncertain') {
          uncertain.current = optimistic.map(item => item.id === id ? { ...item, pending: false, text: '操作结果尚未确认，请核对制作状态；不会自动重复提交。' } : item);
          setMessages(current => [...current.filter(item => !optimistic.some(local => local.id === item.id)), ...uncertain.current!]);
          try { const journal = await request<Journal>(endpoint); if (alive.current && ticket === operation.current) receive(journal); }
          catch { /* Keep uncertainty until a read receipt is available. */ }
        } else {
          consumed.current.delete(message.id);
          setMessages(current => current.filter(item => !optimistic.some(local => local.id === item.id)));
        }
      }
    } finally { if (ticket === operation.current) { pending.current = false; if (alive.current) setBusy(false); } }
  }
  async function refresh() {
    if (!projectId || pending.current) return;
    pending.current = true; operation.current += 1;
    const ticket = operation.current;
    setBusy(true);
    try {
      const journal = await request<Journal>(`${endpoint}/refresh`, { method: 'POST' });
      if (alive.current && ticket === operation.current) { uncertain.current = null; setActionIssue(undefined); setError(''); receive(journal); }
    } catch (failure) { if (alive.current && ticket === operation.current) setActionIssue({ kind: 'read', message: errorMessage(failure) }); }
    finally { if (ticket === operation.current) { pending.current = false; if (alive.current) setBusy(false); } }
  }
  return { messages, issue: actionIssue ?? (error ? { kind: 'read' as const, message: error } : undefined), act, refresh, busy,
    canAct: (message: ProductionMessage) => message.current !== false && latest.get(message.planId)?.id === message.id && !busy && !message.pending && !consumed.current.has(message.id) };
}
