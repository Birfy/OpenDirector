import { toArray } from "./module-ial.js";
import f from "TnJ";
class n {
  constructor(t, e, r) {
    if (!(this instanceof n)) {
      return new n(t, e, r);
    }
    this.Hash = t;
    this.blockSize = t.blockSize / 8;
    this.outSize = t.outSize / 8;
    this.inner = null;
    this.outer = null;
    this._init(toArray(e, r));
  }
  _init(t) {
    if (t.length > this.blockSize) {
      t = new this.Hash().update(t).digest();
    }
    f(t.length <= this.blockSize);
    for (var e = t.length; e < this.blockSize; e++) {
      t.push(0);
    }
    for (e = 0; e < t.length; e++) {
      t[e] ^= 54;
    }
    this.inner = new this.Hash().update(t);
    for (e = 0; e < t.length; e++) {
      t[e] ^= 106;
    }
    this.outer = new this.Hash().update(t);
  }
  update(t, e) {
    this.inner.update(t, e);
    return this;
  }
  digest(t) {
    this.outer.update(this.inner.digest());
    return this.outer.digest(t);
  }
}
export default n;
