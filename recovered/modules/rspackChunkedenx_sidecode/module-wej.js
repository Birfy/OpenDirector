import { AES } from "./module-rD_12.js";
import { Buffer } from "./module-s6_2_2.js";
import te from "./module-vWC.js";
import tr from "./module-ULy.js";
import tn from "./module-nZ.js";
import ti from "./module-qJ_12.js";
import to from "./module-HK_12.js";
function ta(J, Z, Q, tr) {
  te.call(this);
  const ti = Buffer.alloc(4, 0);
  this._cipher = new AES(Z);
  const ta = this._cipher.encryptBlock(ti);
  this._ghash = new tn(ta);
  Q = ((J, Z, Q) => {
    if (Z.length === 12) {
      J._finID = Buffer.concat([Z, Buffer.from([0, 0, 0, 1])]);
      return Buffer.concat([Z, Buffer.from([0, 0, 0, 2])]);
    }
    const $ = new tn(Q);
    const Z_length = Z.length;
    let tr = Z_length % 16;
    $.update(Z);
    if (tr) {
      tr = 16 - tr;
      $.update(Buffer.alloc(tr, 0));
    }
    $.update(Buffer.alloc(8, 0));
    const ti = Buffer.alloc(8);
    ti.writeUIntBE(8 * Z_length, 0, 8);
    $.update(ti);
    J._finID = $.state;
    const ta = Buffer.from(J._finID);
    to(ta);
    return ta;
  })(this, Q, ta);
  this._prev = Buffer.from(Q);
  this._cache = Buffer.allocUnsafe(0);
  this._secCache = Buffer.allocUnsafe(0);
  this._decrypt = tr;
  this._alen = 0;
  this._len = 0;
  this._mode = J;
  this._authTag = null;
  this._called = false;
}
tr(ta, te);
ta.prototype._update = function (J) {
  if (!this._called && this._alen) {
    let Z = 16 - (this._alen % 16);
    if (Z < 16) {
      Z = Buffer.alloc(Z, 0);
      this._ghash.update(Z);
    }
  }
  this._called = true;
  const Q = this._mode.encrypt(this, J);
  if (this._decrypt) {
    this._ghash.update(J);
  } else {
    this._ghash.update(Q);
  }
  this._len += J.length;
  return Q;
};
ta.prototype._final = function () {
  if (this._decrypt && !this._authTag) {
    throw Error("Unsupported state or unable to authenticate data");
  }
  const J = ti(
    this._ghash.final(8 * this._alen, 8 * this._len),
    this._cipher.encryptBlock(this._finID),
  );
  if (
    this._decrypt &&
    ((J, Z) => {
      let Q = 0;
      if (J.length !== Z.length) {
        Q++;
      }
      for (let $ = Math.min(J.length, Z.length), tt = 0; tt < $; ++tt) {
        Q += J[tt] ^ Z[tt];
      }
      return Q;
    })(J, this._authTag)
  ) {
    throw Error("Unsupported state or unable to authenticate data");
  }
  this._authTag = J;
  this._cipher.scrub();
};
ta.prototype.getAuthTag = function () {
  if (this._decrypt || !Buffer.isBuffer(this._authTag)) {
    throw Error("Attempting to get auth tag in unsupported state");
  }
  return this._authTag;
};
ta.prototype.setAuthTag = function (J) {
  if (!this._decrypt) {
    throw Error("Attempting to set auth tag in unsupported state");
  }
  this._authTag = J;
};
ta.prototype.setAAD = function (J) {
  if (this._called) {
    throw Error("Attempting to set AAD in unsupported state");
  }
  this._ghash.update(J);
  this._alen += J.length;
};
export default ta;
