import i from "TnJ";
function f(t) {
  this.options = t;
  this.type = this.options.type;
  this.blockSize = 8;
  this._init();
  this.buffer = Array(this.blockSize);
  this.bufferOff = 0;
  this.padding = t.padding !== false;
}
export default f;
f.prototype._init = function () {};
f.prototype.update = function (t) {
  if (t.length === 0) {
    return [];
  }
  if (this.type === "decrypt") {
    return this._updateDecrypt(t);
  }
  return this._updateEncrypt(t);
};
f.prototype._buffer = function (t, e) {
  for (
    var r = Math.min(this.buffer.length - this.bufferOff, t.length - e), i = 0;
    i < r;
    i++
  ) {
    this.buffer[this.bufferOff + i] = t[e + i];
  }
  this.bufferOff += r;
  return r;
};
f.prototype._flushBuffer = function (t, e) {
  this._update(this.buffer, 0, t, e);
  this.bufferOff = 0;
  return this.blockSize;
};
f.prototype._updateEncrypt = function (t) {
  let e = 0;
  let r = 0;
  const i = Array(
    (((this.bufferOff + t.length) / this.blockSize) | 0) * this.blockSize,
  );
  if (this.bufferOff !== 0) {
    e += this._buffer(t, e);
    if (this.bufferOff === this.buffer.length) {
      r += this._flushBuffer(i, r);
    }
  }
  for (
    const f = t.length - ((t.length - e) % this.blockSize);
    e < f;
    e += this.blockSize
  ) {
    this._update(t, e, i, r);
    r += this.blockSize;
  }
  for (; e < t.length; e++, this.bufferOff++) {
    this.buffer[this.bufferOff] = t[e];
  }
  return i;
};
f.prototype._updateDecrypt = function (t) {
  let e = 0;
  let r = 0;
  for (
    var i = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1,
      f = Array(i * this.blockSize);
    i > 0;
    i--
  ) {
    e += this._buffer(t, e);
    r += this._flushBuffer(f, r);
  }
  e += this._buffer(t, e);
  return f;
};
f.prototype.final = function (t) {
  let e;
  let r;
  if (t) {
    e = this.update(t);
  }
  r = this.type === "encrypt" ? this._finalEncrypt() : this._finalDecrypt();
  if (e) {
    return e.concat(r);
  }
  return r;
};
f.prototype._pad = function (t, e) {
  if (e === 0) {
    return false;
  }
  while (e < t.length) {
    t[e++] = 0;
  }
  return true;
};
f.prototype._finalEncrypt = function () {
  if (!this._pad(this.buffer, this.bufferOff)) {
    return [];
  }
  const t = Array(this.blockSize);
  this._update(this.buffer, 0, t, 0);
  return t;
};
f.prototype._unpad = function (t) {
  return t;
};
f.prototype._finalDecrypt = function () {
  i.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
  const t = Array(this.blockSize);
  this._flushBuffer(t, 0);
  return this._unpad(t);
};
