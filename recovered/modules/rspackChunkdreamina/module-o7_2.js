import "./module-tA_4.js";
import "./module-Dm.js";
import { C } from "./module-nO.js";
import { H } from "./module-jqE.js";
import { Nn, V5, f5 } from "./module-pnN.js";
export class jG {
  dispose() {
    f5(this);
    H(this.constructor.name, this._store.constructor.name);
    this._store.dispose();
  }
  _register(e) {
    if (e === this) {
      throw Error("Cannot register a disposable on itself!");
    }
    return this._store.add(e);
  }
  constructor() {
    this._store = new C();
    Nn(this);
    V5(this._store, this);
  }
}
export class HE {
  get value() {
    if (this._isDisposed) {
      return undefined;
    }
    return this._value;
  }
  set value(e) {
    let t;
    if (!(this._isDisposed || e === this._value)) {
      if ((t = this._value) != null) {
        t.dispose();
      }
      if (e) {
        V5(e, this);
      }
      this._value = e;
    }
  }
  clear() {
    this.value = undefined;
  }
  dispose() {
    let e;
    this._isDisposed = true;
    f5(this);
    if ((e = this._value) != null) {
      e.dispose();
    }
    this._value = undefined;
  }
  release() {
    let _value = this._value;
    this._value = undefined;
    if (_value) {
      V5(_value, null);
    }
    return _value;
  }
  constructor(e) {
    this._isDisposed = false;
    Nn(this);
    this.value = e;
  }
}
export class St {
  get value() {
    return this._value;
  }
  isEmpty() {
    return this._value === undefined;
  }
  dispose() {
    if (this._value) {
      this._value.dispose();
      this._value = undefined;
      f5(this);
    }
  }
  constructor(e) {
    this._value = e;
    Nn(this);
  }
}
