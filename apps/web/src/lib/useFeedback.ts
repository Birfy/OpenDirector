import { useCallback, useEffect, useRef, useState } from 'react';
import type { Feedback } from './feedback';

export function useFeedback(owner: string | null) {
  const active = useRef(owner); active.current = owner;
  const [state, setState] = useState<{ owner: string | null; items: Record<string, Feedback> }>({ owner, items: {} });
  const items = state.owner === owner ? state.items : {};
  useEffect(() => { setState({ owner, items: {} }); }, [owner]);
  const put = useCallback((key: string, feedback: Feedback | null) => {
    if (active.current !== owner) return;
    setState(current => {
      if (!feedback && current.owner === owner && !(key in current.items)) return current;
      const next = { ...(current.owner === owner ? current.items : {}) };
      if (feedback) next[key] = feedback; else delete next[key];
      return { owner, items: next };
    });
  }, [owner]);
  const clearKind = useCallback((kind: Feedback['kind']) => {
    if (active.current !== owner) return;
    setState(current => {
      if (current.owner !== owner || !Object.values(current.items).some(value => value.kind === kind)) return current;
      return { owner, items: Object.fromEntries(Object.entries(current.items).filter(([, value]) => value.kind !== kind)) };
    });
  }, [owner]);
  useEffect(() => {
    const expiry = Math.min(...Object.values(items).map(value => value.expiresAt ?? Infinity));
    if (!Number.isFinite(expiry)) return;
    const timer = window.setTimeout(() => setState(current => ({ ...current, items: Object.fromEntries(
      Object.entries(current.items).filter(([, value]) => !value.expiresAt || value.expiresAt > Date.now()),
    ) })), Math.max(0, expiry - Date.now()));
    return () => clearTimeout(timer);
  }, [state, owner]);
  return { items, put, clearKind };
}
