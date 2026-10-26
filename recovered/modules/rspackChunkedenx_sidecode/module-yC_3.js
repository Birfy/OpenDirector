import { Buffer } from "./module-s6_2_2.js";
function tt(J, Z) {
  this._block = Buffer.alloc(J);
  this._finalSize = Z;
  this._blockSize = J;
  this._len = 0;
}
tt.prototype.update = function (J, Z) {
  if (typeof J === "string") {
    Z = Z || "utf8";
    J = Buffer.from(J, Z);
  }
  const _block = this._block;
  const _blockSize = this._blockSize;
  for (var te = J.length, tr = this._len, tn = 0; tn < te;) {
    const ti = tr % _blockSize;
    for (var to = Math.min(te - tn, _blockSize - ti), ta = 0; ta < to; ta++) {
      _block[ti + ta] = J[tn + ta];
    }
    tr += to;
    tn += to;
    if (tr % _blockSize == 0) {
      this._update(_block);
    }
  }
  this._len += te;
  return this;
};
tt.prototype.digest = function (J) {
  const Z = this._len % this._blockSize;
  this._block[Z] = 128;
  this._block.fill(0, Z + 1);
  if (Z >= this._finalSize) {
    this._update(this._block);
    this._block.fill(0);
  }
  const Q = 8 * this._len;
  if (Q <= 4294967295) {
    this._block.writeUInt32BE(Q, this._blockSize - 4);
  } else {
    const $ = Q >>> 0;
    this._block.writeUInt32BE((Q - $) / 4294967296, this._blockSize - 8);
    this._block.writeUInt32BE($, this._blockSize - 4);
  }
  this._update(this._block);
  const tt = this._hash();
  if (J) {
    return tt.toString(J);
  }
  return tt;
};
tt.prototype._update = function () {
  throw Error("_update must be implemented by subclass");
};
export default tt;
