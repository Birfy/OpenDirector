import $ from "./module-EK.js";
import tt from "./module-wej.js";
import { Buffer } from "./module-s6_2_2.js";
import tr from "./module-fs_12.js";
import tn from "./module-vWC.js";
import { AES } from "./module-rD_12.js";
import to from "./module-YY_2_2.js";
function ta(J, Z, Q) {
  tn.call(this);
  this._cache = new tf();
  this._cipher = new AES(Z);
  this._prev = Buffer.from(Q);
  this._mode = J;
  this._autopadding = true;
}
require("./module-ULy.js")(ta, tn);
ta.prototype._update = function (J) {
  this._cache.add(J);
  let Z;
  let Q;
  const $ = [];
  while ((Z = this._cache.get())) {
    Q = this._mode.encrypt(this, Z);
    $.push(Q);
  }
  return Buffer.concat($);
};
const ts = Buffer.alloc(16, 16);
class tf {
  constructor() {
    this.cache = Buffer.allocUnsafe(0);
  }
  add(J) {
    this.cache = Buffer.concat([this.cache, J]);
  }
  get() {
    if (this.cache.length > 15) {
      const J = this.cache.slice(0, 16);
      this.cache = this.cache.slice(16);
      return J;
    }
    return null;
  }
  flush() {
    for (
      var J = 16 - this.cache.length, Z = Buffer.allocUnsafe(J), Q = -1;
      ++Q < J;
    ) {
      Z.writeUInt8(J, Q);
    }
    return Buffer.concat([this.cache, Z]);
  }
}
export function createCipheriv(J, Z, Q) {
  const tn = $[J.toLowerCase()];
  if (!tn) {
    throw TypeError("invalid suite type");
  }
  if (typeof Z === "string") {
    Z = Buffer.from(Z);
  }
  if (Z.length !== tn.key / 8) {
    throw TypeError("invalid key length " + Z.length);
  }
  if (typeof Q === "string") {
    Q = Buffer.from(Q);
  }
  if (tn.mode !== "GCM" && Q.length !== tn.iv) {
    throw TypeError("invalid iv length " + Q.length);
  }
  if (tn.type === "stream") {
    return new tr(tn.module, Z, Q);
  }
  if (tn.type === "auth") {
    return new tt(tn.module, Z, Q);
  }
  return new ta(tn.module, Z, Q);
}
ta.prototype._final = function () {
  let J = this._cache.flush();
  if (this._autopadding) {
    J = this._mode.encrypt(this, J);
    this._cipher.scrub();
    return J;
  }
  if (!J.equals(ts)) {
    this._cipher.scrub();
    throw Error("data not multiple of block length");
  }
};
ta.prototype.setAutoPadding = function (J) {
  this._autopadding = !!J;
  return this;
};
export const createCipher = function (J, Z) {
  const Q = $[J.toLowerCase()];
  if (!Q) {
    throw TypeError("invalid suite type");
  }
  const tt = to(Z, false, Q.key, Q.iv);
  return createCipheriv(J, tt.key, tt.iv);
};
