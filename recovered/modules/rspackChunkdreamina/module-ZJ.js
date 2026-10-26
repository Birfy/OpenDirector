import $ from "./module-a5.js";
export default er;
const ee = Object.create(require("Rp"));
function et(Z, Q) {
  const _transformState = this._transformState;
  _transformState.transforming = false;
  const X_writecb = _transformState.writecb;
  if (!X_writecb) {
    return this.emit("error", Error("write callback called multiple times"));
  }
  _transformState.writechunk = null;
  _transformState.writecb = null;
  if (Q != null) {
    this.push(Q);
  }
  X_writecb(Z);
  const _readableState = this._readableState;
  _readableState.reading = false;
  if (
    _readableState.needReadable ||
    _readableState.length < _readableState.highWaterMark
  ) {
    this._read(_readableState.highWaterMark);
  }
}
function er(Z) {
  if (!(this instanceof er)) {
    return new er(Z);
  }
  $.call(this, Z);
  this._transformState = {
    afterTransform: et.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null,
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (Z) {
    if (typeof Z.transform === "function") {
      this._transform = Z.transform;
    }
    if (typeof Z.flush === "function") {
      this._flush = Z.flush;
    }
  }
  this.on("prefinish", en);
}
function en() {
  const Z = this;
  if (typeof this._flush === "function") {
    this._flush(function (Q, X) {
      ei(Z, Q, X);
    });
  } else {
    ei(this, null, null);
  }
}
function ei(Z, Q, X) {
  if (Q) {
    return Z.emit("error", Q);
  }
  if (X != null) {
    Z.push(X);
  }
  if (Z._writableState.length) {
    throw Error("Calling transform done when ws.length != 0");
  }
  if (Z._transformState.transforming) {
    throw Error("Calling transform done when still transforming");
  }
  return Z.push(null);
}
ee.inherits = require("Hs");
ee.inherits(er, $);
er.prototype.push = function (Z, Q) {
  this._transformState.needTransform = false;
  return $.prototype.push.call(this, Z, Q);
};
er.prototype._transform = function (Z, Q, X) {
  throw Error("_transform() is not implemented");
};
er.prototype._write = function (Z, Q, X) {
  const _transformState = this._transformState;
  _transformState.writecb = X;
  _transformState.writechunk = Z;
  _transformState.writeencoding = Q;
  if (!_transformState.transforming) {
    const ee = this._readableState;
    if (
      _transformState.needTransform ||
      ee.needReadable ||
      ee.length < ee.highWaterMark
    ) {
      this._read(ee.highWaterMark);
    }
  }
};
er.prototype._read = function (Z) {
  const _transformState = this._transformState;
  if (
    _transformState.writechunk !== null &&
    _transformState.writecb &&
    !_transformState.transforming
  ) {
    _transformState.transforming = true;
    this._transform(
      _transformState.writechunk,
      _transformState.writeencoding,
      _transformState.afterTransform,
    );
  } else {
    _transformState.needTransform = true;
  }
};
er.prototype._destroy = function (Z, Q) {
  const X = this;
  $.prototype._destroy.call(this, Z, function (Z) {
    Q(Z);
    X.emit("close");
  });
};
