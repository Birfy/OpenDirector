import { useEffect, useRef } from 'react';
import type { Confirmation } from '../../../lib/useConfirmation';
import { AssetDialog } from './AssetDialog';

export function ConfirmationDialog({ value, onRespond }: { value: Confirmation; onRespond: (accepted: boolean) => void }) {
  const cancel = useRef<HTMLButtonElement>(null);
  useEffect(() => { cancel.current?.focus({ preventScroll: true }); }, []);
  return <AssetDialog title={value.title} onClose={() => onRespond(false)}>
    <p>{value.message}</p>
    <footer>
      <button ref={cancel} type="button" className="secondary-button" onClick={() => onRespond(false)}>取消</button>
      <button type="button" className="primary-button" onClick={() => onRespond(true)}>{value.confirmLabel}</button>
    </footer>
  </AssetDialog>;
}
