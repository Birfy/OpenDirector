// Serialize writes without keeping a completed failure as the next read's barrier.
export function createActionQueue() {
  let tail: Promise<void> = Promise.resolve();
  const pending = new Set<Promise<unknown>>();
  function run<T>(action: () => Promise<T>): Promise<T> {
    const result = tail.then(action);
    const complete = result.finally(() => { pending.delete(complete); });
    pending.add(complete);
    // Each caller receives its own result; later operations can still proceed.
    tail = complete.then(() => {}, () => {});
    return complete;
  }
  // Only failures of work still pending at this point can reject this barrier.
  const flush = () => Promise.all([...pending]).then(() => {});
  return { run, flush };
}
