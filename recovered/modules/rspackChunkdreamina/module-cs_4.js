import { d } from "./module-eV_2.js";
if (require.j == "wl4") var o = require("./module-A7.js");
let onCancellationRequested = Object.freeze(function (e, t) {
  let r = setTimeout(e.bind(t), 0);
  return {
    dispose() {
      clearTimeout(r);
    },
  };
});
class n {
  get reason() {
    return this._reason;
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    if (this._isCancelled) {
      return onCancellationRequested;
    }
    if (!this._emitter) {
      this._emitter = new o.v();
    }
    return this._emitter.event;
  }
  cancel(e) {
    if (!this._isCancelled) {
      this._reason = e;
      this._isCancelled = true;
      if (this._emitter) {
        this._emitter.fire();
        this.dispose();
      }
    }
  }
  dispose() {
    if (this._emitter) {
      this._emitter.dispose();
      this._emitter = null;
    }
  }
  constructor() {
    this._isCancelled = false;
    this._emitter = null;
  }
}
export class X {}
X.None = Object.freeze({
  isCancellationRequested: false,
  onCancellationRequested: () => d,
});
X.Cancelled = Object.freeze({
  isCancellationRequested: true,
  onCancellationRequested,
});
X.Make = (reason) =>
  Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested,
    reason,
  });
export class Q {
  get token() {
    if (!this._token) {
      this._token = new n();
    }
    return this._token;
  }
  get signal() {
    let e;
    if (!this._abortController) {
      this._abortController = new AbortController();
      if ((e = this._token) == null ? undefined : e.isCancellationRequested) {
        this._abortController.abort();
      }
    }
    return this._abortController.signal;
  }
  cancel(e) {
    if (this._token) {
      if (this._token instanceof n) {
        this._token.cancel(e);
      }
    } else {
      this._token = e === undefined ? X.Cancelled : X.Make(e);
    }
    if (this._abortController) {
      this._abortController.abort(e);
    }
  }
  dispose(e = false) {
    let t;
    if (e) {
      this.cancel();
    }
    if ((t = this._parentListener) != null) {
      t.dispose();
    }
    if (this._token) {
      if (this._token instanceof n) {
        this._token.dispose();
      }
    } else {
      this._token = X.None;
    }
  }
  constructor(e) {
    this._token = undefined;
    this._parentListener = undefined;
    this._abortController = undefined;
    this._parentListener =
      e == null ? undefined : e.onCancellationRequested(this.cancel, this);
  }
}
