import { useCallback, useEffect, useRef, useState } from 'react';
import { errorMessage, json, request } from '../../../lib/api';

interface GeneralSettings { removeWatermark: boolean }

export function useGeneralSettings() {
  const [value, setValue] = useState<GeneralSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const revision = useRef(0);
  const saving = useRef(false);

  const refresh = useCallback(async () => {
    if (saving.current) return;
    const current = ++revision.current;
    setLoading(true);
    try {
      const result = await request<GeneralSettings>('/settings');
      if (current !== revision.current) return;
      setValue(result);
      setError('');
    } catch (failure) {
      if (current !== revision.current) return;
      setValue(null);
      setError(`读取水印设置失败：${errorMessage(failure)}`);
    } finally { if (current === revision.current) setLoading(false); }
  }, []);

  useEffect(() => {
    void refresh();
    const onFocus = () => { void refresh(); };
    window.addEventListener('focus', onFocus);
    return () => { ++revision.current; window.removeEventListener('focus', onFocus); };
  }, [refresh]);

  async function setRemoveWatermark(removeWatermark: boolean) {
    if (saving.current || loading || value === null) return;
    saving.current = true;
    const current = ++revision.current;
    setBusy(true);
    setError('');
    try {
      const saved = await request<GeneralSettings>('/settings', json('PATCH', { removeWatermark }));
      if (current === revision.current) setValue(saved);
    } catch (failure) {
      if (current !== revision.current) return;
      setValue(null);
      setError(`水印设置保存未确认：${errorMessage(failure)} 请核对当前状态后重试。`);
      // A response may be lost after the server committed the preference.
      // Re-read instead of presenting the previous value as authoritative.
      try {
        const saved = await request<GeneralSettings>('/settings');
        if (current === revision.current) setValue(saved);
      } catch { /* Keep the switch unavailable until a successful read. */ }
    } finally {
      saving.current = false;
      if (current === revision.current) setBusy(false);
    }
  }

  return { value, loading, busy, error, refresh, setRemoveWatermark };
}

export type GeneralSettingsControls = ReturnType<typeof useGeneralSettings>;
