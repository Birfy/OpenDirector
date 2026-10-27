import { useState, type FormEvent } from 'react';
import { errorMessage } from '../../../lib/api';
import { MODEL_KINDS, modelOptions, type ModelConfig, type ModelKind } from '../models';
import type { ModelCatalog } from '../hooks/useModelConfigs';

function ModelForm({ kind, existing, catalog, onClose }: {
  kind: ModelKind; existing?: ModelConfig; catalog: ModelCatalog; onClose: () => void;
}) {
  const [connectionType, setConnectionType] = useState<'api' | 'self_hosted'>(existing?.connectionType ?? 'api');
  const [protocol, setProtocol] = useState<'openai' | 'volcengine' | 'vllm_omni'>(existing?.protocol ?? (kind === 'agent' ? 'openai' : 'volcengine'));
  const [authMode, setAuthMode] = useState<'none' | 'bearer'>(existing?.authMode ?? 'bearer');
  const [url, setUrl] = useState(existing?.url ?? '');
  const [modelId, setModelId] = useState(existing?.modelId ?? '');
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');
  function changeConnection(value: 'api' | 'self_hosted') {
    setConnectionType(value);
    setAuthMode(value === 'self_hosted' ? 'none' : 'bearer');
    setProtocol(kind === 'agent' ? 'openai' : value === 'self_hosted' ? kind === 'video' ? 'vllm_omni' : 'openai' : 'volcengine');
  }
  async function submit(event: FormEvent) {
    event.preventDefault(); setError('');
    try {
      await catalog.save({ kind, url, modelId, apiKey, connectionType, protocol, authMode }, existing?.id);
      onClose();
    } catch (failure) { setError(errorMessage(failure)); }
  }
  return <form className="model-form" autoComplete="off" aria-label={existing ? '编辑模型' : '添加模型'} onSubmit={event => void submit(event)}>
    <fieldset disabled={catalog.busy}>
      <label>接入方式<select className="text-input" aria-label="接入方式" value={connectionType} onChange={event => changeConnection(event.target.value as typeof connectionType)}><option value="api">服务商 API</option><option value="self_hosted">自部署服务（云端 / 本地）</option></select></label>
      <label>接口协议<select className="text-input" aria-label="接口协议" value={protocol} onChange={event => setProtocol(event.target.value as typeof protocol)}>
        {kind !== 'video' && <option value="openai">OpenAI 兼容接口{kind === 'audio' ? '（语音合成）' : ''}</option>}
        {kind === 'video' && <option value="vllm_omni">vLLM-Omni 视频接口（FastH3）</option>}
        {kind !== 'agent' && <option value="volcengine">火山方舟 / Agent Plan</option>}
      </select></label>
      <label>服务地址（Base URL）<input className="text-input" type="url" required maxLength={2048} autoFocus value={url} placeholder={connectionType === 'self_hosted' ? 'http://127.0.0.1:18091/v1' : kind === 'agent' ? 'https://api.deepseek.com' : kind === 'audio' ? 'https://openspeech.bytedance.com/api/v3/plan' : 'https://ark.cn-beijing.volces.com/api/plan/v3'} onChange={event => setUrl(event.target.value)} /></label>
      <label>鉴权方式<select className="text-input" aria-label="鉴权方式" value={authMode} onChange={event => setAuthMode(event.target.value as typeof authMode)}><option value="bearer">API Key / Bearer Token</option><option value="none">无需鉴权（如 SSH 隧道内服务）</option></select></label>
      {authMode === 'bearer' && <label>API Key / Token<input className="text-input" type="password" name="api-key" required={!existing || existing.authMode === 'none'} maxLength={8192} autoComplete="off" autoCapitalize="none" spellCheck={false} value={apiKey} placeholder={existing ? '留空保留原密钥' : '输入服务端配置的密钥'} onChange={event => setApiKey(event.target.value)} /></label>}
      <label>Model ID<input className="text-input" required maxLength={200} value={modelId} placeholder={protocol === 'vllm_omni' ? 'FastH3-Omni' : '输入服务提供的模型 ID'} onChange={event => setModelId(event.target.value)} /></label>
      {connectionType === 'self_hosted' && <p className="asset-hint">地址需能从 MuseShow 后端访问；通过 SSH 隧道连接时填写本地转发地址。{protocol === 'vllm_omni' && '支持图片、视频和音频素材参考，默认生成 5 秒 480P 视频。'}</p>}
      {error && <p className="model-error" role="alert">{error}</p>}
      <div className="model-form-actions"><button type="button" className="secondary-button" onClick={onClose}>取消</button><button className="primary-button" type="submit">{catalog.busy ? '保存中…' : '保存模型'}</button></div>
    </fieldset>
  </form>;
}

export function ModelSettings({ catalog }: { catalog: ModelCatalog }) {
  const [editing, setEditing] = useState<{ kind: ModelKind; model?: ModelConfig } | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState('');
  async function remove(id: string) {
    setError('');
    try { await catalog.remove(id); setDeleting(null); }
    catch (failure) { setError(errorMessage(failure)); }
  }
  return <div className="model-settings">
    {catalog.error && <div className="settings-notice" role="alert"><span>{catalog.error}</span><button className="secondary-button" disabled={catalog.loading || catalog.busy} onClick={() => void catalog.refresh()}>重新读取模型列表</button></div>}
    {error && <p className="model-error" role="alert">{error}</p>}
    {catalog.loading && <p role="status">正在读取模型配置…</p>}
    {catalog.loaded && MODEL_KINDS.map(kind => {
      const models = modelOptions(catalog.models, kind.id);
      return <section key={kind.id} className="model-section" aria-labelledby={`model-section-${kind.id}`}>
        <div className="model-section-header"><h3 id={`model-section-${kind.id}`}>{kind.label}{kind.id !== 'agent' && '生成'}</h3><button className="secondary-button" disabled={catalog.busy || !!editing} onClick={() => { setEditing({ kind: kind.id }); setDeleting(null); setError(''); }}>添加模型</button></div>
        {models.length === 0 && <p className="model-empty">暂无模型</p>}
        <ul className="model-list">{models.map(model => <li key={model.id}>
          <div className="model-copy"><strong title={model.label}>{model.label}</strong><small title={model.url}>{model.url}</small><small>{model.connectionType === 'self_hosted' ? '自部署服务' : '服务商 API'} · {model.protocol === 'vllm_omni' ? 'vLLM-Omni' : model.protocol === 'openai' ? 'OpenAI 兼容' : '火山方舟'} · {model.authMode === 'none' ? '无需鉴权' : '密钥已配置'}</small></div>
          <div className="model-row-actions"><button type="button" className="secondary-button" disabled={catalog.busy || !!editing} onClick={() => { setEditing({ kind: kind.id, model }); setDeleting(null); setError(''); }}>编辑</button><button type="button" className="secondary-button" disabled={catalog.busy || !!editing} onClick={() => { setDeleting(model.id); setError(''); }}>删除</button></div>
          {deleting === model.id && <div className="model-delete-confirm"><span>删除此配置？已选用它的位置需要重新选择。</span><button className="secondary-button" disabled={catalog.busy} onClick={() => setDeleting(null)}>取消</button><button className="secondary-button" disabled={catalog.busy} onClick={() => void remove(model.id)}>{catalog.busy ? '删除中…' : '确认删除'}</button></div>}
        </li>)}</ul>
        {editing?.kind === kind.id && <ModelForm key={editing.model?.id ?? kind.id} kind={kind.id} existing={editing.model} catalog={catalog} onClose={() => setEditing(null)} />}
      </section>;
    })}
  </div>;
}
