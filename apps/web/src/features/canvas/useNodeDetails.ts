import { useCallback, useEffect, useRef, useState } from 'react';
import type { CanvasNode } from './types';

interface DetailsState { id: string | null; pinned: boolean; focusRequest: number }
const CLOSED: DetailsState = { id: null, pinned: false, focusRequest: 0 };

export function useNodeDetails(nodes: CanvasNode[]) {
  const [state, setState] = useState(CLOSED);
  const current = useRef(state);
  const hovered = useRef<string | null>(null);
  const suspended = useRef(false);
  const openingBlocked = useRef<string | null>(null);
  const opening = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const closing = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const clearTimers = useCallback(() => {
    clearTimeout(opening.current); clearTimeout(closing.current);
  }, []);
  const update = useCallback((next: DetailsState) => { current.current = next; setState(next); }, []);
  const dismiss = useCallback((id?: string) => {
    if (id && current.current.id !== id) return;
    clearTimers();
    update(CLOSED);
  }, [clearTimers, update]);
  const enter = useCallback((id: string) => {
    hovered.current = id;
    clearTimers();
    if (openingBlocked.current && current.current.id !== id && !current.current.pinned) dismiss();
    if (suspended.current || openingBlocked.current || current.current.pinned || current.current.id === id) return;
    opening.current = setTimeout(() => {
      if (!suspended.current && !openingBlocked.current && !current.current.pinned && hovered.current === id) update({ id, pinned: false, focusRequest: 0 });
    }, 250);
  }, [clearTimers, dismiss, update]);
  const leave = useCallback((id: string) => {
    if (hovered.current !== id) return;
    hovered.current = null;
    clearTimers();
    closing.current = setTimeout(() => {
      if (current.current.id === id && !current.current.pinned && hovered.current !== id) dismiss(id);
    }, 300);
  }, [clearTimers, dismiss]);
  const show = useCallback((id: string, focus = true) => {
    clearTimers();
    if (current.current.pinned && current.current.id !== id) return false;
    update({ id, pinned: true, focusRequest: focus ? current.current.focusRequest + 1 : 0 });
    return true;
  }, [clearTimers, update]);
  const pin = useCallback((id: string) => {
    if (current.current.id === id && !current.current.pinned) update({ ...current.current, pinned: true });
  }, [update]);
  const suspend = useCallback((value: boolean, blockOpening: string | null = null) => {
    if (suspended.current === value && openingBlocked.current === blockOpening) return;
    suspended.current = value;
    openingBlocked.current = blockOpening;
    if (value) {
      // Suspension hides the preview, but does not change where the pointer is.
      if (current.current.pinned) clearTimers();
      else dismiss();
    } else if (blockOpening) {
      // Passing a connection port must not remove the panel on the way to its controls.
      clearTimeout(opening.current);
      if (current.current.id !== blockOpening && !current.current.pinned) dismiss();
    } else if (hovered.current) enter(hovered.current);
  }, [clearTimers, dismiss, enter]);
  useEffect(() => {
    if (hovered.current && !nodes.some(node => node.id === hovered.current)) {
      hovered.current = null;
      clearTimers();
    }
    if (state.id && !nodes.some(node => node.id === state.id)) dismiss(state.id);
  }, [nodes, state.id, dismiss, clearTimers]);
  useEffect(() => clearTimers, [clearTimers]);
  return { ...state, enter, leave, show, pin, dismiss, suspend };
}

export type NodeDetails = ReturnType<typeof useNodeDetails>;
