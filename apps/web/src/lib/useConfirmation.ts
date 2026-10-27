import { useCallback, useEffect, useRef, useState } from 'react';

export interface Confirmation {
  title: string;
  message: string;
  confirmLabel: string;
}

export function useConfirmation(owner: string) {
  const [pending, setPending] = useState<{ owner: string; value: Confirmation } | null>(null);
  const resolve = useRef<((accepted: boolean) => void) | null>(null);
  const respond = useCallback((accepted: boolean) => {
    const complete = resolve.current;
    resolve.current = null;
    setPending(null);
    complete?.(accepted);
  }, []);
  useEffect(() => {
    setPending(null);
    return () => {
      // Closing a node or switching projects must never leave an awaiting save running.
      resolve.current?.(false);
      resolve.current = null;
    };
  }, [owner]);
  const ask = useCallback((value: Confirmation) => {
    resolve.current?.(false);
    setPending({ owner, value });
    return new Promise<boolean>(complete => { resolve.current = complete; });
  }, [owner]);
  return { value: pending?.owner === owner ? pending.value : null, ask, respond };
}
