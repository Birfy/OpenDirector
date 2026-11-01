import i from "./module-by_3.js";
import f from "./module-mk_2.js";
import { Buffer } from "b58";
import a from "./module-fV0.js";
import s from "./module-wYy.js";
import { AES } from "./module-SL1.js";
import h from "./module-psp.js";
function d(t, e, r) {
  s.call(this);
  this._cache = new u();
  this._cipher = new AES(e);
  this._prev = Buffer.from(r);
  this._mode = t;
  this._autopadding = true;
}
require("./module-Hs_2.js")(d, s);
d.prototype._update = function (t) {
  this._cache.add(t);
  let e;
  let r;
  const i = [];
  while ((e = this._cache.get())) {
    r = this._mode.encrypt(this, e);
    i.push(r);
  }
  return Buffer.concat(i);
};
const c = Buffer.alloc(16, 16);
class u {
  constructor() {
    this.cache = Buffer.allocUnsafe(0);
  }
  add(t) {
    this.cache = Buffer.concat([this.cache, t]);
  }
  get() {
    if (this.cache.length > 15) {
      const t = this.cache.slice(0, 16);
      this.cache = this.cache.slice(16);
      return t;
    }
    return null;
  }
  flush() {
    for (
      var t = 16 - this.cache.length, e = Buffer.allocUnsafe(t), r = -1;
      ++r < t;
    ) {
      e.writeUInt8(t, r);
    }
    return Buffer.concat([this.cache, e]);
  }
}
export function createCipheriv(t, e, r) {
  const s = i[t.toLowerCase()];
  if (!s) {
    throw TypeError("invalid suite type");
  }
  if (typeof e === "string") {
    e = Buffer.from(e);
  }
  if (e.length !== s.key / 8) {
    throw TypeError("invalid key length " + e.length);
  }
  if (typeof r === "string") {
    r = Buffer.from(r);
  }
  if (s.mode !== "GCM" && r.length !== s.iv) {
    throw TypeError("invalid iv length " + r.length);
  }
  if (s.type === "stream") {
    return new a(s.module, e, r);
  }
  if (s.type === "auth") {
    return new f(s.module, e, r);
  }
  return new d(s.module, e, r);
}
d.prototype._final = function () {
  let t = this._cache.flush();
  if (this._autopadding) {
    t = this._mode.encrypt(this, t);
    this._cipher.scrub();
    return t;
  }
  if (!t.equals(c)) {
    this._cipher.scrub();
    throw Error("data not multiple of block length");
  }
};
d.prototype.setAutoPadding = function (t) {
  this._autopadding = !!t;
  return this;
};
export const createCipher = function (t, e) {
  const r = i[t.toLowerCase()];
  if (!r) {
    throw TypeError("invalid suite type");
  }
  const f = h(e, false, r.key, r.iv);
  return createCipheriv(t, f.key, f.iv);
};
