import { ApiError, errorMessage, uncertainFailure } from './api';

export interface Feedback {
  message: string;
  kind: 'notice' | 'input' | 'error' | 'read' | 'conflict' | 'uncertain';
  expiresAt?: number;
}

export function operationFeedback(failure: unknown): Feedback {
  if (uncertainFailure(failure)) return { kind: 'uncertain', message: `操作结果尚未确认：${errorMessage(failure)} 请核对结果；不会自动重复提交。` };
  if (failure instanceof ApiError) {
    if (failure.code === 'revision_conflict') return { kind: 'conflict', message: failure.message };
    if (['role_restricted', 'invalid_input', 'discard_confirmation_required'].includes(failure.code)) return { kind: 'input', message: failure.message };
  }
  return { kind: 'error', message: errorMessage(failure) };
}
