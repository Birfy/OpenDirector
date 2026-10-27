import type { FormEvent } from 'react';
import { Icon } from '../../../components/Icon';
import type { ProjectDialogControls } from '../hooks/useProjectDialog';
import type { Project } from '../types';
import { errorMessage } from '../../../lib/api';

interface Props {
  controls: ProjectDialogControls;
  onCreate: (name: string, id: string) => Promise<void>;
  onRename: (project: Project, name: string) => Promise<void>;
}

export function ProjectDialog({ controls, onCreate, onRename }: Props) {
  const { dialog, name, setName, editingProject, dialogRef, closeDialog, pending, setPending, error, setError, creationId } = controls;
  if (!dialog) return null;

  async function submitProject(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || pending) return;
    setPending(true); setError('');
    try {
      if (dialog === 'rename' && editingProject) await onRename(editingProject, name);
      else if (dialog === 'new') await onCreate(name, creationId.current);
      closeDialog();
    } catch (failure) { setError(errorMessage(failure)); }
    finally { setPending(false); }
  }

  return <dialog ref={dialogRef} className="app-dialog" aria-labelledby="dialog-heading" onCancel={event => { event.preventDefault(); closeDialog(); }} onClick={event => { if (event.target === event.currentTarget) closeDialog(); }}>
    <div className="dialog-content">
      <header className="dialog-header"><h2 id="dialog-heading">{dialog === 'new' ? '新建项目' : '重命名项目'}</h2><button className="icon-button" disabled={pending} aria-label="关闭对话框" onClick={closeDialog}><Icon name="close" /></button></header>
      {error && <p className="project-dialog-error" role="alert">{error}</p>}
      <form onSubmit={submitProject}>
        <label className="field-label" htmlFor="project-name">项目名称</label>
        <input id="project-name" className="text-input" autoFocus disabled={pending} value={name} maxLength={100} placeholder="为你的新作品命名" onChange={event => setName(event.target.value)} required />
        <p className="dialog-hint">{dialog === 'rename' ? '请先保存并关闭项目。项目名称与文件夹同步修改，项目内容保持不变。' : '项目将保存到仓库下 projects 中的同名文件夹。'}</p>
        <div className="dialog-actions"><button type="button" className="secondary-button" disabled={pending} onClick={closeDialog}>取消</button><button type="submit" className="primary-button" disabled={!name.trim() || pending}>{pending ? '正在保存…' : dialog === 'rename' ? '保存' : '创建项目'}</button></div>
      </form>
    </div>
  </dialog>;
}
