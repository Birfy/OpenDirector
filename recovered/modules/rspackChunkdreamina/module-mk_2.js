import { AES } from "./module-SL1.js";
import { Buffer } from "b58";
import n from "./module-wYy.js";
import a from "./module-Hs_2.js";
import s from "./module-b9.js";
import o from "./module-ZRF.js";
import h from "./module-Vzb.js";
function d(t, e, r, a) {
  n.call(this);
  const o = Buffer.alloc(4, 0);
  this._cipher = new AES(e);
  const d = this._cipher.encryptBlock(o);
  this._ghash = new s(d);
  r = ((t, e, r) => {
    if (e.length === 12) {
      t._finID = Buffer.concat([e, Buffer.from([0, 0, 0, 1])]);
      return Buffer.concat([e, Buffer.from([0, 0, 0, 2])]);
    }
    const i = new s(r);
    const e_length = e.length;
    let a = e_length % 16;
    i.update(e);
    if (a) {
      a = 16 - a;
      i.update(Buffer.alloc(a, 0));
    }
    i.update(Buffer.alloc(8, 0));
    const o = Buffer.alloc(8);
    o.writeUIntBE(8 * e_length, 0, 8);
    i.update(o);
    t._finID = i.state;
    const d = Buffer.from(t._finID);
    h(d);
    return d;
  })(this, r, d);
  this._prev = Buffer.from(r);
  this._cache = Buffer.allocUnsafe(0);
  this._secCache = Buffer.allocUnsafe(0);
  this._decrypt = a;
  this._alen = 0;
  this._len = 0;
  this._mode = t;
  this._authTag = null;
  this._called = false;
}
a(d, n);
d.prototype._update = function (t) {
  if (!this._called && this._alen) {
    let e = 16 - (this._alen % 16);
    if (e < 16) {
      e = Buffer.alloc(e, 0);
      this._ghash.update(e);
    }
  }
  this._called = true;
  const r = this._mode.encrypt(this, t);
  if (this._decrypt) {
    this._ghash.update(t);
  } else {
    this._ghash.update(r);
  }
  this._len += t.length;
  return r;
};
d.prototype._final = function () {
  if (this._decrypt && !this._authTag) {
    throw Error("Unsupported state or unable to authenticate data");
  }
  const t = o(
    this._ghash.final(8 * this._alen, 8 * this._len),
    this._cipher.encryptBlock(this._finID),
  );
  if (
    this._decrypt &&
    ((t, e) => {
      let r = 0;
      if (t.length !== e.length) {
        r++;
      }
      for (let i = Math.min(t.length, e.length), f = 0; f < i; ++f) {
        r += t[f] ^ e[f];
      }
      return r;
    })(t, this._authTag)
  ) {
    throw Error("Unsupported state or unable to authenticate data");
  }
  this._authTag = t;
  this._cipher.scrub();
};
d.prototype.getAuthTag = function () {
  if (this._decrypt || !Buffer.isBuffer(this._authTag)) {
    throw Error("Attempting to get auth tag in unsupported state");
  }
  return this._authTag;
};
d.prototype.setAuthTag = function (t) {
  if (!this._decrypt) {
    throw Error("Attempting to set auth tag in unsupported state");
  }
  this._authTag = t;
};
d.prototype.setAAD = function (t) {
  if (this._called) {
    throw Error("Attempting to set AAD in unsupported state");
  }
  this._ghash.update(t);
  this._alen += t.length;
};
export default d;
