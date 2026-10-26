export class P {
  get isLocked() {
    return this._locked;
  }
  acquire() {
    if (this._locked) {
      return new Promise((resolve, reject) => {
        this._awaitQueue.push({
          resolve,
          reject,
        });
      });
    }
    this._locked = true;
    return Promise.resolve();
  }
  release() {
    if (!this._locked) {
      throw Error("mutex lock is not locked.");
    }
    this._locked = false;
    const e = this._awaitQueue.pop();
    if (e) {
      this._locked = true;
      e.resolve();
    }
  }
  constructor() {
    this._awaitQueue = [];
    this._locked = false;
  }
}
