import $ from "./module-fn_2.js";
function tt(J) {
  this.options = J;
  this.type = this.options.type;
  this.blockSize = 8;
  this._init();
  this.buffer = Array(this.blockSize);
  this.bufferOff = 0;
  this.padding = J.padding !== false;
}
export default tt;
tt.prototype._init = function () {};
tt.prototype.update = function (J) {
  if (J.length === 0) {
    return [];
  }
  if (this.type === "decrypt") {
    return this._updateDecrypt(J);
  }
  return this._updateEncrypt(J);
};
tt.prototype._buffer = function (J, Z) {
  for (
    var Q = Math.min(this.buffer.length - this.bufferOff, J.length - Z), $ = 0;
    $ < Q;
    $++
  ) {
    this.buffer[this.bufferOff + $] = J[Z + $];
  }
  this.bufferOff += Q;
  return Q;
};
tt.prototype._flushBuffer = function (J, Z) {
  this._update(this.buffer, 0, J, Z);
  this.bufferOff = 0;
  return this.blockSize;
};
tt.prototype._updateEncrypt = function (J) {
  let Z = 0;
  let Q = 0;
  const $ = Array(
    (((this.bufferOff + J.length) / this.blockSize) | 0) * this.blockSize,
  );
  if (this.bufferOff !== 0) {
    Z += this._buffer(J, Z);
    if (this.bufferOff === this.buffer.length) {
      Q += this._flushBuffer($, Q);
    }
  }
  for (
    const tt = J.length - ((J.length - Z) % this.blockSize);
    Z < tt;
    Z += this.blockSize
  ) {
    this._update(J, Z, $, Q);
    Q += this.blockSize;
  }
  for (; Z < J.length; Z++, this.bufferOff++) {
    this.buffer[this.bufferOff] = J[Z];
  }
  return $;
};
tt.prototype._updateDecrypt = function (J) {
  let Z = 0;
  let Q = 0;
  for (
    var $ = Math.ceil((this.bufferOff + J.length) / this.blockSize) - 1,
      tt = Array($ * this.blockSize);
    $ > 0;
    $--
  ) {
    Z += this._buffer(J, Z);
    Q += this._flushBuffer(tt, Q);
  }
  Z += this._buffer(J, Z);
  return tt;
};
tt.prototype.final = function (J) {
  let Z;
  let Q;
  if (J) {
    Z = this.update(J);
  }
  Q = this.type === "encrypt" ? this._finalEncrypt() : this._finalDecrypt();
  if (Z) {
    return Z.concat(Q);
  }
  return Q;
};
tt.prototype._pad = function (J, Z) {
  if (Z === 0) {
    return false;
  }
  while (Z < J.length) {
    J[Z++] = 0;
  }
  return true;
};
tt.prototype._finalEncrypt = function () {
  if (!this._pad(this.buffer, this.bufferOff)) {
    return [];
  }
  const J = Array(this.blockSize);
  this._update(this.buffer, 0, J, 0);
  return J;
};
tt.prototype._unpad = function (J) {
  return J;
};
tt.prototype._finalDecrypt = function () {
  $.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
  const J = Array(this.blockSize);
  this._flushBuffer(J, 0);
  return this._unpad(J);
};
