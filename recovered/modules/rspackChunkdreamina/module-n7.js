import { Buffer } from "./module-b58.js";
function ee(Z, Q) {
  this._block = Buffer.alloc(Z);
  this._finalSize = Q;
  this._blockSize = Z;
  this._len = 0;
}
ee.prototype.update = function (Z, Q) {
  if (typeof Z === "string") {
    Q = Q || "utf8";
    Z = Buffer.from(Z, Q);
  }
  const _block = this._block;
  const _blockSize = this._blockSize;
  for (var et = Z.length, er = this._len, en = 0; en < et;) {
    const ei = er % _blockSize;
    for (var ea = Math.min(et - en, _blockSize - ei), eo = 0; eo < ea; eo++) {
      _block[ei + eo] = Z[en + eo];
    }
    er += ea;
    en += ea;
    if (er % _blockSize == 0) {
      this._update(_block);
    }
  }
  this._len += et;
  return this;
};
ee.prototype.digest = function (Z) {
  const Q = this._len % this._blockSize;
  this._block[Q] = 128;
  this._block.fill(0, Q + 1);
  if (Q >= this._finalSize) {
    this._update(this._block);
    this._block.fill(0);
  }
  const X = 8 * this._len;
  if (X <= 4294967295) {
    this._block.writeUInt32BE(X, this._blockSize - 4);
  } else {
    const $ = X >>> 0;
    this._block.writeUInt32BE((X - $) / 4294967296, this._blockSize - 8);
    this._block.writeUInt32BE($, this._blockSize - 4);
  }
  this._update(this._block);
  const ee = this._hash();
  if (Z) {
    return ee.toString(Z);
  }
  return ee;
};
ee.prototype._update = function () {
  throw Error("_update must be implemented by subclass");
};
export default ee;
