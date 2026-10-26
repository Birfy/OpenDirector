import i from "./module-mk_2.js";
import { Buffer } from "b58";
import n from "./module-by_3.js";
import a from "./module-fV0.js";
import s from "./module-wYy.js";
import { AES } from "./module-SL1.js";
import h from "./module-psp.js";
function d(t, e, r) {
  s.call(this);
  this._cache = new c();
  this._last = undefined;
  this._cipher = new AES(e);
  this._prev = Buffer.from(r);
  this._mode = t;
  this._autopadding = true;
}
class c {
  constructor() {
    this.cache = Buffer.allocUnsafe(0);
  }
  add(t) {
    this.cache = Buffer.concat([this.cache, t]);
  }
  get(t) {
    let e;
    if (t) {
      if (this.cache.length > 16) {
        e = this.cache.slice(0, 16);
        this.cache = this.cache.slice(16);
        return e;
      }
    } else if (this.cache.length >= 16) {
      e = this.cache.slice(0, 16);
      this.cache = this.cache.slice(16);
      return e;
    }
    return null;
  }
  flush() {
    if (this.cache.length) {
      return this.cache;
    }
  }
}
export function createDecipheriv(t, e, r) {
  const s = n[t.toLowerCase()];
  if (!s) {
    throw TypeError("invalid suite type");
  }
  if (typeof r === "string") {
    r = Buffer.from(r);
  }
  if (s.mode !== "GCM" && r.length !== s.iv) {
    throw TypeError("invalid iv length " + r.length);
  }
  if (typeof e === "string") {
    e = Buffer.from(e);
  }
  if (e.length !== s.key / 8) {
    throw TypeError("invalid key length " + e.length);
  }
  if (s.type === "stream") {
    return new a(s.module, e, r, true);
  }
  if (s.type === "auth") {
    return new i(s.module, e, r, true);
  }
  return new d(s.module, e, r);
}
require("./module-Hs_2.js")(d, s);
d.prototype._update = function (t) {
  this._cache.add(t);
  let e;
  let r;
  const i = [];
  while ((e = this._cache.get(this._autopadding))) {
    r = this._mode.decrypt(this, e);
    i.push(r);
  }
  return Buffer.concat(i);
};
d.prototype._final = function () {
  const t = this._cache.flush();
  if (this._autopadding) {
    const e = this._mode.decrypt(this, t);
    const r = e[15];
    if (r < 1 || r > 16) {
      throw Error("unable to decrypt data");
    }
    for (let i = -1; ++i < r;) {
      if (e[i + (16 - r)] !== r) {
        throw Error("unable to decrypt data");
      }
    }
    if (r !== 16) {
      return e.slice(0, 16 - r);
    }
    return undefined;
  }
  if (t) {
    throw Error("data not multiple of block length");
  }
};
d.prototype.setAutoPadding = function (t) {
  this._autopadding = !!t;
  return this;
};
export const createDecipher = function (t, e) {
  const r = n[t.toLowerCase()];
  if (!r) {
    throw TypeError("invalid suite type");
  }
  const i = h(e, false, r.key, r.iv);
  return createDecipheriv(t, i.key, i.iv);
};
