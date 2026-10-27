import { useEffect, useRef, useState } from 'react';
import type { Project } from '../types';

export function useProjectDialog() {
  const [dialog, setDialog] = useState<'new' | 'rename' | null>(null);
  const [name, setName] = useState('');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const creationId = useRef('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const newProjectRef = useRef<HTMLButtonElement>(null);
  const dialogTrigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!dialog) return;
    dialogRef.current?.showModal();
    if (dialog === 'rename') dialogRef.current?.querySelector<HTMLInputElement>('input')?.select();
  }, [dialog]);

  function openNewDialog() {
    dialogTrigger.current = document.activeElement as HTMLElement;
    setName('');
    setError(''); creationId.current = crypto.randomUUID();
    setDialog('new');
  }
  function openRenameDialog(project: Project, trigger: HTMLButtonElement) {
    dialogTrigger.current = trigger;
    setEditingProject(project);
    setError('');
    setName(project.name);
    setDialog('rename');
  }
  function closeDialog() {
    if (pending) return;
    dialogRef.current?.close();
    setDialog(null);
    requestAnimationFrame(() => {
      if (dialogTrigger.current?.isConnected) dialogTrigger.current.focus();
      else newProjectRef.current?.focus();
    });
  }

  return { dialog, name, setName, editingProject, dialogRef, newProjectRef, openNewDialog, openRenameDialog, closeDialog,
    pending, setPending, error, setError, creationId };
}

export type ProjectDialogControls = ReturnType<typeof useProjectDialog>;
