import { useCallback, useEffect, useRef, useState } from 'react';
import { errorMessage, json, request } from '../../../lib/api';
import type { ModelConfig, ModelConfigInput } from '../models';

export function useModelConfigs() {
  const [models, setModels] = useState<ModelConfig[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const revision = useRef(0);
  const refresh = useCallback(async () => {
    const current = ++revision.current;
    setLoading(true);
    try {
      const result = await request<ModelConfig[]>('/model-configs');
      if (current !== revision.current) return;
      setModels(result);
      setLoaded(true);
      setError('');
    } catch (failure) { if (current === revision.current) setError(`读取模型配置失败：${errorMessage(failure)}`); }
    finally { if (current === revision.current) setLoading(false); }
  }, []);
  useEffect(() => { void refresh(); }, [refresh]);

  async function save(value: ModelConfigInput, id?: string) {
    ++revision.current;
    setLoading(false);
    setBusy(true);
    try {
      const saved = await request<ModelConfig>(`/model-configs${id ? `/${id}` : ''}`, json(id ? 'PATCH' : 'POST', value));
      setModels(current => id ? current.map(item => item.id === id ? saved : item) : [...current, saved]);
    } finally { setBusy(false); }
  }
  async function remove(id: string) {
    ++revision.current;
    setLoading(false);
    setBusy(true);
    try {
      await request(`/model-configs/${id}`, { method: 'DELETE' });
      setModels(current => current.filter(item => item.id !== id));
    } finally { setBusy(false); }
  }
  return { models, loaded, loading, error, busy, refresh, save, remove };
}

export type ModelCatalog = ReturnType<typeof useModelConfigs>;
