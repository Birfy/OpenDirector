import { jG } from "./module-o7_2.js";
import o from "NY";
import { v } from "./module-A7.js";
import { iX } from "./module-K8.js";
import { X } from "./module-cs_4.js";
class l extends jG {
  safeExec() {
    const e = this;
    return o._(function* () {
      if (!e._isCancel && !e._isExec) {
        try {
          let t;
          e._isExec = true;
          yield e._callback((t = e._cancellationToken) != null ? t : X.None);
          e._onSuccess.fire();
        } catch (error) {
          e._onFailure.fire(iX(-1, "exec error", error));
        }
      }
    })();
  }
  cancel() {
    if (!(this._isCancel || this._isExec)) {
      this._isCancel = true;
      this._callback = null;
      this._onCancel.fire();
    }
  }
  constructor(e, t) {
    var r;
    super();
    this._callback = e;
    this._cancellationToken = t;
    this._onSuccess = this._store.add(new v());
    this.onSuccess = this._onSuccess.event;
    this._onFailure = this._store.add(new v());
    this.onFailure = this._onFailure.event;
    this._onCancel = this._store.add(new v());
    this.onCancel = this._onCancel.event;
    this._isExec = false;
    this._isCancel = false;
    if ((r = this._cancellationToken) != null) {
      r.onCancellationRequested(() => {
        this.cancel();
      });
    }
  }
}
export class O extends jG {
  addTask(e, t) {
    if (t == null ? undefined : t.isCancellationRequested) {
      return new l(null);
    }
    let r = new l(e);
    this._queue.push(this._store.add(r));
    this._next();
    return r;
  }
  _next() {
    if (
      this._queue.length &&
      this._execCounter < this._maxConcurrent &&
      this._queue.length > 0
    ) {
      let e = this._queue.shift();
      this._execCounter++;
      e.safeExec().finally(() => {
        this._execCounter--;
        this._next();
      });
    }
  }
  constructor(e) {
    super();
    this._queue = [];
    this._maxConcurrent = 1;
    this._execCounter = 0;
    this._maxConcurrent = e.concurrent;
  }
}
