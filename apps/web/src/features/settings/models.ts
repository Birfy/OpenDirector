export const MODEL_KINDS = [
  { id: 'agent', label: 'Agent' },
  { id: 'image', label: '图片' },
  { id: 'video', label: '视频' },
  { id: 'audio', label: '音频' },
] as const;

export type ModelKind = (typeof MODEL_KINDS)[number]['id'];
export interface InputRules { profile: string; allowedKinds: string[]; maxImages: number; maxAudios: number; maxVideos?: number; imageBytes: number; requestBytes: number; videoModes: ('first_frame' | 'reference' | 'continuation')[] }
// Missing or null: choose the first available model when configured.
export type ModelSelections = Partial<Record<ModelKind, string | null>>;
export interface ModelConfig {
  id: string;
  kind: ModelKind;
  url: string;
  modelId: string;
  connectionType?: 'api' | 'self_hosted';
  protocol?: 'openai' | 'volcengine' | 'vllm_omni';
  authMode?: 'none' | 'bearer';
  inputRules: InputRules;
}
export interface ModelConfigInput { kind: ModelKind; url: string; modelId: string; apiKey: string; connectionType?: 'api' | 'self_hosted'; protocol?: 'openai' | 'volcengine' | 'vllm_omni'; authMode?: 'none' | 'bearer' }

// Chat-to-agent metadata and the selected generation model's media inputs are separate capabilities.
export function metadataOnlyReferenceKinds(videoModel?: Pick<ModelConfig, 'inputRules'>): string[] {
  const rules = videoModel?.inputRules;
  return ['video', 'audio'].filter(kind => !rules?.videoModes.includes('reference')
    || !rules.allowedKinds.includes(kind) || !(kind === 'video' ? rules.maxVideos : rules.maxAudios));
}

export function modelOptions(models: ModelConfig[], kind: ModelKind) {
  const options = models.filter(model => model.kind === kind);
  return options.map(model => {
    const host = new URL(model.url).host;
    const duplicate = options.some(item => item.id !== model.id && item.modelId === model.modelId);
    return { ...model, label: duplicate ? `${model.modelId} · ${host}` : model.modelId, description: host };
  });
}
