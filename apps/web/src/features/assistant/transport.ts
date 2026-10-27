import type { ReferenceContent } from '../references/content';
import { sessionId } from '../../lib/api';
import type { Conversation, Thinking } from './types';
import type { ModelSelections } from '../settings/models';

export const THINKING: { id: Thinking; label: string; description: string }[] = [
  { id: 'auto', label: '自动', description: '使用模型服务的默认思考程度' },
  { id: 'low', label: '快速', description: '适合简单调整和快速问答' },
  { id: 'medium', label: '标准', description: '兼顾速度与分析深度' },
  { id: 'high', label: '深入', description: '适合剧本规划和复杂分析' },
];
interface ChatRequest { id: string; modelId: string; text: string; content?: ReferenceContent | null; assets: string[]; thinking: Thinking; modelSelections: ModelSelections; selectedNodeId: string | null; selectedShotId: string | null }
export type ChatEvent = { type: 'start'; conversation: Conversation } | { type: 'thinking' }
  | { type: 'tool'; name: string; status: 'running' | 'complete' | 'failed'; nodeId?: string | null; assetId?: string | null; taskId?: string | null; error?: string; message?: string }
  | { type: 'delta'; text: string } | { type: 'end'; conversation: Conversation | null; error: string | null };

export async function* streamChat(scope: string, value: ChatRequest, signal: AbortSignal): AsyncIterable<ChatEvent> {
  let response: Response;
  try {
    response = await fetch(`/api/data/${scope}/chat`, {
      method: 'POST', signal, headers: { 'Content-Type': 'application/json', 'X-MuseShow-Request': '1', 'X-MuseShow-Session': sessionId }, body: JSON.stringify(value),
    });
  } catch (failure) {
    if (signal.aborted) throw failure;
    throw new Error('无法连接本地服务，请检查启动终端后重试。');
  }
  if (!response.ok) {
    const failure = await response.json().catch(() => null);
    throw new Error(typeof failure?.detail === 'string' ? failure.detail : `本地对话请求失败（${response.status}）。`);
  }
  if (!response.body) throw new Error('浏览器无法读取流式回复。');
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  try {
    while (true) {
      const { value: bytes, done } = await reader.read();
      buffer += decoder.decode(bytes, { stream: !done });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';
      for (const line of lines) {
        if (!line.startsWith('data:')) continue;
        const data: ChatEvent = JSON.parse(line.slice(5));
        yield data;
        if (data.type === 'end') return;
      }
      if (done) throw new Error('回复连接已中断，请重新加载获取后端保存的内容。');
    }
  } finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
}
