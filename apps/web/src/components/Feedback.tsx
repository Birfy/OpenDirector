import { useState } from 'react';
import type { Feedback as FeedbackValue } from '../lib/feedback';
import { Icon } from './Icon';

export function Feedback({ value, onRead, readLabel = '读取最新状态', onDismiss, className = 'asset-error', label }: {
  value?: FeedbackValue; onRead?: () => Promise<unknown>; readLabel?: string; onDismiss?: () => void; className?: string; label?: string;
}) {
  const [reading, setReading] = useState(false);
  if (!value) return null;
  const recover = onRead && ['read', 'conflict', 'uncertain'].includes(value.kind);
  return <div className={className} data-feedback-kind={value.kind} role={value.kind === 'notice' ? 'status' : 'alert'} aria-label={label}>
    {value.kind === 'notice' && <Icon name="check" />}
    <span>{label && <strong className="feedback-label">{label}： </strong>}{value.message}</span>
    {recover && <button type="button" className="secondary-button" disabled={reading} onClick={() => {
      setReading(true); void onRead().catch(() => {}).finally(() => setReading(false));
    }}>{reading ? '正在读取…' : value.kind === 'uncertain' ? '核对操作结果' : readLabel}</button>}
    {onDismiss && <button type="button" className="icon-button" aria-label="关闭提示" onClick={onDismiss}><Icon name="close" /></button>}
  </div>;
}
