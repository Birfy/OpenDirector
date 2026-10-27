import { useEffect, useRef, useState } from 'react';
import { loadAsset } from '../assets/api';
import { retryableReadFailure, errorMessage } from '../../lib/api';

interface Source { url: string; error: string; retryable: boolean; controller: AbortController }

/** Only retain the current and next shot, sharing a video's URL with its audio. */
export function useTimelineSources(projectId: string, ids: string[]) {
  const cache = useRef(new Map<string, Source>());
  const [, redraw] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const key = [...new Set(ids)].sort().join(',');
  useEffect(() => {
    const wanted = new Set(key ? key.split(',') : []);
    for (const [id, source] of cache.current) {
      if (!wanted.has(id)) { source.controller.abort(); if (source.url) URL.revokeObjectURL(source.url); cache.current.delete(id); }
    }
    for (const id of wanted) {
      if (cache.current.has(id)) continue;
      const source = { url: '', error: '', retryable: false, controller: new AbortController() };
      cache.current.set(id, source);
      void loadAsset(projectId, id, source.controller.signal).then(blob => {
        if (!source.controller.signal.aborted) source.url = URL.createObjectURL(blob);
      }).catch(failure => { if (!source.controller.signal.aborted) { source.error = errorMessage(failure); source.retryable = retryableReadFailure(failure); } }).finally(() => {
        if (!source.controller.signal.aborted) redraw(version => version + 1);
      });
    }
    redraw(version => version + 1);
  }, [projectId, key, attempt]);
  useEffect(() => () => {
    for (const source of cache.current.values()) { source.controller.abort(); if (source.url) URL.revokeObjectURL(source.url); }
    cache.current.clear();
  }, [projectId]);
  function retry() {
    for (const source of cache.current.values()) { source.controller.abort(); if (source.url) URL.revokeObjectURL(source.url); }
    cache.current.clear(); setAttempt(value => value + 1);
  }
  return { sources: cache.current, retry };
}
