/** Serialize saves, replacing only an unstarted automatic save at the tail.
 * Explicit saves are barriers: work before them cannot absorb later edits. */
export class SaveQueue<T> {
  private tail = Promise.resolve(true);
  private queued = 0;
  private pending?: {
    value: T;
    key?: string;
    promise: Promise<boolean>;
  };

  private readonly save: (value: T) => Promise<boolean>;
  constructor(save: (value: T) => Promise<boolean>) {
    this.save = save;
  }

  get busy() {
    return this.queued > 0;
  }

  enqueue(value: T, key?: string): Promise<boolean> {
    if (key !== undefined && this.pending?.key === key) {
      this.pending.value = value;
      return this.pending.promise;
    }
    this.queued += 1;
    const task: { value: T; key?: string; promise: Promise<boolean> } = {
      value,
      key,
      promise: this.tail
        .then(() => {
          if (this.pending === task) this.pending = undefined;
          return this.save(task.value);
        })
        .finally(() => {
          this.queued -= 1;
        }),
    };
    this.pending = key === undefined ? undefined : task;
    // A failure must not block the next explicit save or a project switch.
    this.tail = task.promise.catch(() => false);
    return task.promise;
  }

  wait() {
    return this.tail;
  }
}
