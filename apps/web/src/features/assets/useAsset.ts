import { retryableReadFailure, errorMessage } from '../../lib/api';
import { useEffect, useState } from 'react';
import { loadAsset } from './api';
import type { Attachment } from './types';

export function useAsset(scope: string, asset: Attachment | undefined) {
  const [attempt, setAttempt] = useState(0);
  const [value, setValue] = useState({ scope, id: asset?.id, url: '', text: '', error: '', retryable: false });
  useEffect(() => {
    const controller = new AbortController();
    let url = '';
    setValue({ scope, id: asset?.id, url: '', text: '', error: '', retryable: false });
    if (!asset) return;
    void loadAsset(scope, asset.id, controller.signal).then(async file => {
      if (controller.signal.aborted) return;
      url = URL.createObjectURL(file);
      const text = (asset.type.startsWith('text/') || /\.(txt|md)$/i.test(asset.name)) && file.size <= 1024 * 1024 ? await file.text() : '';
      if (!controller.signal.aborted) setValue({ scope, id: asset.id, url, text, error: '', retryable: false });
      else URL.revokeObjectURL(url);
    }).catch(failure => { if (!controller.signal.aborted) setValue({ scope, id: asset.id, url: '', text: '', error: errorMessage(failure), retryable: retryableReadFailure(failure) }); });
    return () => { controller.abort(); if (url) URL.revokeObjectURL(url); };
  }, [scope, asset?.id, asset?.type, asset?.fingerprint, attempt]);
  const result = value.scope === scope && value.id === asset?.id ? value : { url: '', text: '', error: '', retryable: false };
  return { ...result, retry: () => setAttempt(value => value + 1) };
}
