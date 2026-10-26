import { V } from "./module-tA_4.js";
import { H } from "./module-jqE.js";
import { Nn, V5, f5 } from "./module-pnN.js";
export class C {
  get isDisposed() {
    return this._isDisposed;
  }
  dispose() {
    if (this._isDisposed) {
      V.warn(Error("DisposableStore has disposed.").stack);
    } else {
      f5(this);
      this._isDisposed = true;
      this.clear();
    }
  }
  clear() {
    if (this._toDispose.size === 0) {
      return;
    }
    for (let e of this._toDispose) {
      H(this.constructor.name, e.constructor.name);
    }
    let e = [];
    for (let t of this._toDispose) {
      try {
        t.dispose();
      } catch (error) {
        e.push(error);
      }
    }
    this._toDispose.clear();
    if (e.length > 0) {
      throw AggregateError(e, "find error when dispose store.");
    }
  }
  add(e) {
    if (!e) {
      return e;
    }
    if (e === this) {
      throw Error("Cannot register a disposable on itself.");
    }
    V5(e, this);
    if (this._isDisposed) {
      if (!C.DISABLE_DISPOSED_WARNING) {
        V.warn(
          Error(
            "Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!",
          ).stack,
        );
      }
    } else {
      this._toDispose.add(e);
    }
    return e;
  }
  constructor() {
    this._toDispose = new Set();
    this._isDisposed = false;
    Nn(this);
  }
}
C.DISABLE_DISPOSED_WARNING = false;
