import { Buffer } from "b58";
import { Transform } from "SLl";
function n(t) {
  Transform.call(this);
  this._block = Buffer.allocUnsafe(t);
  this._blockSize = t;
  this._blockOffset = 0;
  this._length = [0, 0, 0, 0];
  this._finalized = false;
}
require("./module-Hs_2.js")(n, Transform);
n.prototype._transform = function (t, e, r) {
  let i = null;
  try {
    this.update(t, e);
  } catch (error) {
    i = error;
  }
  r(i);
};
n.prototype._flush = function (t) {
  let e = null;
  try {
    this.push(this.digest());
  } catch (error) {
    e = error;
  }
  t(e);
};
n.prototype.update = function (t, e) {
  const r = t;
  if (!Buffer.isBuffer(r) && typeof r !== "string") {
    throw TypeError("Data must be a string or a buffer");
  }
  if (this._finalized) {
    throw Error("Digest already called");
  }
  if (!Buffer.isBuffer(t)) {
    t = Buffer.from(t, e);
  }
  const _block = this._block;
  for (var n = 0; this._blockOffset + t.length - n >= this._blockSize;) {
    for (let a = this._blockOffset; a < this._blockSize;) {
      _block[a++] = t[n++];
    }
    this._update();
    this._blockOffset = 0;
  }
  while (n < t.length) {
    _block[this._blockOffset++] = t[n++];
  }
  for (let s = 0, o = 8 * t.length; o > 0; ++s) {
    this._length[s] += o;
    if ((o = (this._length[s] / 4294967296) | 0) > 0) {
      this._length[s] -= 4294967296 * o;
    }
  }
  return this;
};
n.prototype._update = function () {
  throw Error("_update is not implemented");
};
n.prototype.digest = function (t) {
  if (this._finalized) {
    throw Error("Digest already called");
  }
  this._finalized = true;
  let e = this._digest();
  if (t !== undefined) {
    e = e.toString(t);
  }
  this._block.fill(0);
  this._blockOffset = 0;
  for (let r = 0; r < 4; ++r) {
    this._length[r] = 0;
  }
  return e;
};
n.prototype._digest = function () {
  throw Error("_digest is not implemented");
};
export default n;
