export class W {
  isOpen() {
    return this._isOpen;
  }
  open() {
    this._isOpen = true;
    this._completePromise(true);
  }
  reject(e) {
    this._rejectPromise(e);
  }
  wait() {
    return this._promise;
  }
  constructor() {
    this._isOpen = false;
    this._promise = new Promise((resolve, reject) => {
      this._completePromise = resolve;
      this._rejectPromise = reject;
    });
  }
}
export function k(e, t = false) {
  let r = new W();
  e.then(() => r.open()).catch((e) => {
    if (t) {
      r.open();
      throw e;
    }
    r.reject(e);
  });
  return r;
}
