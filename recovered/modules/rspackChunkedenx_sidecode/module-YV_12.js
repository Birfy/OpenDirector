import $ from "./module-wej.js";
import { Buffer } from "./module-s6_2_2.js";
import te from "./module-EK.js";
import tr from "./module-fs_12.js";
import tn from "./module-vWC.js";
import { AES } from "./module-rD_12.js";
import to from "./module-YY_2_2.js";
function ta(J, Z, Q) {
  tn.call(this);
  this._cache = new ts();
  this._last = undefined;
  this._cipher = new AES(Z);
  this._prev = Buffer.from(Q);
  this._mode = J;
  this._autopadding = true;
}
class ts {
  constructor() {
    this.cache = Buffer.allocUnsafe(0);
  }
  add(J) {
    this.cache = Buffer.concat([this.cache, J]);
  }
  get(J) {
    let Z;
    if (J) {
      if (this.cache.length > 16) {
        Z = this.cache.slice(0, 16);
        this.cache = this.cache.slice(16);
        return Z;
      }
    } else if (this.cache.length >= 16) {
      Z = this.cache.slice(0, 16);
      this.cache = this.cache.slice(16);
      return Z;
    }
    return null;
  }
  flush() {
    if (this.cache.length) {
      return this.cache;
    }
  }
}
export function createDecipheriv(J, Z, Q) {
  const tn = te[J.toLowerCase()];
  if (!tn) {
    throw TypeError("invalid suite type");
  }
  if (typeof Q === "string") {
    Q = Buffer.from(Q);
  }
  if (tn.mode !== "GCM" && Q.length !== tn.iv) {
    throw TypeError("invalid iv length " + Q.length);
  }
  if (typeof Z === "string") {
    Z = Buffer.from(Z);
  }
  if (Z.length !== tn.key / 8) {
    throw TypeError("invalid key length " + Z.length);
  }
  if (tn.type === "stream") {
    return new tr(tn.module, Z, Q, true);
  }
  if (tn.type === "auth") {
    return new $(tn.module, Z, Q, true);
  }
  return new ta(tn.module, Z, Q);
}
require("./module-ULy.js")(ta, tn);
ta.prototype._update = function (J) {
  this._cache.add(J);
  let Z;
  let Q;
  const $ = [];
  while ((Z = this._cache.get(this._autopadding))) {
    Q = this._mode.decrypt(this, Z);
    $.push(Q);
  }
  return Buffer.concat($);
};
ta.prototype._final = function () {
  const J = this._cache.flush();
  if (this._autopadding) {
    const Z = this._mode.decrypt(this, J);
    const Q = Z[15];
    if (Q < 1 || Q > 16) {
      throw Error("unable to decrypt data");
    }
    for (let $ = -1; ++$ < Q;) {
      if (Z[$ + (16 - Q)] !== Q) {
        throw Error("unable to decrypt data");
      }
    }
    if (Q !== 16) {
      return Z.slice(0, 16 - Q);
    }
    return undefined;
  }
  if (J) {
    throw Error("data not multiple of block length");
  }
};
ta.prototype.setAutoPadding = function (J) {
  this._autopadding = !!J;
  return this;
};
export const createDecipher = function (J, Z) {
  const Q = te[J.toLowerCase()];
  if (!Q) {
    throw TypeError("invalid suite type");
  }
  const $ = to(Z, false, Q.key, Q.iv);
  return createDecipheriv(J, $.key, $.iv);
};
