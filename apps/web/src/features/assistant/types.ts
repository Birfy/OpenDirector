import type { ReferenceContent } from '../references/content';
import type { ModelSelections } from '../settings/models';

export type Thinking = 'auto' | 'low' | 'medium' | 'high';
import type { Attachment as Asset } from '../assets/types';
export type { Attachment as Asset } from '../assets/types';
export interface Message {
  id: string; role: 'user' | 'assistant'; text: string; content?: ReferenceContent | null; assets: Asset[];
  model: string; thinking: Thinking; status: 'complete' | 'streaming' | 'stopped' | 'interrupted';
  source: 'preview' | 'model';
}
export interface Conversation { messages: Message[]; draft: string; draftContent?: ReferenceContent | null; assets: Asset[]; thinking: Thinking; modelSelections: ModelSelections }
export interface NewProjectMessage { id: string; turnId: string; modelId: string; conversation: Conversation }
