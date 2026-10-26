import { toArray } from "./module-IMF.js";
import tt from "./module-fn_2.js";
class te {
  constructor(J, Z, Q) {
    if (!(this instanceof te)) {
      return new te(J, Z, Q);
    }
    this.Hash = J;
    this.blockSize = J.blockSize / 8;
    this.outSize = J.outSize / 8;
    this.inner = null;
    this.outer = null;
    this._init(toArray(Z, Q));
  }
  _init(J) {
    if (J.length > this.blockSize) {
      J = new this.Hash().update(J).digest();
    }
    tt(J.length <= this.blockSize);
    for (var Z = J.length; Z < this.blockSize; Z++) {
      J.push(0);
    }
    for (Z = 0; Z < J.length; Z++) {
      J[Z] ^= 54;
    }
    this.inner = new this.Hash().update(J);
    for (Z = 0; Z < J.length; Z++) {
      J[Z] ^= 106;
    }
    this.outer = new this.Hash().update(J);
  }
  update(J, Z) {
    this.inner.update(J, Z);
    return this;
  }
  digest(J) {
    this.outer.update(this.inner.digest());
    return this.outer.digest(J);
  }
}
export default te;
