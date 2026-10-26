import { F } from "./module-Bwd.js";
import ei from "./module-qd_2.js";
export default eo;
const F_ERR_METHOD_NOT_IMPLEMENTED = F.ERR_METHOD_NOT_IMPLEMENTED;
const F_ERR_MULTIPLE_CALLBACK = F.ERR_MULTIPLE_CALLBACK;
const F_ERR_TRANSFORM_ALREADY_TRANSFORMING =
  F.ERR_TRANSFORM_ALREADY_TRANSFORMING;
const F_ERR_TRANSFORM_WITH_LENGTH_0 = F.ERR_TRANSFORM_WITH_LENGTH_0;
function ea(Z, Q) {
  const _transformState = this._transformState;
  _transformState.transforming = false;
  const X_writecb = _transformState.writecb;
  if (X_writecb === null) {
    return this.emit("error", new F_ERR_MULTIPLE_CALLBACK());
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
function eo(Z) {
  if (!(this instanceof eo)) {
    return new eo(Z);
  }
  ei.call(this, Z);
  this._transformState = {
    afterTransform: ea.bind(this),
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
  this.on("prefinish", es);
}
function es() {
  const Z = this;
  if (typeof this._flush !== "function" || this._readableState.destroyed) {
    ef(this, null, null);
  } else {
    this._flush(function (Q, X) {
      ef(Z, Q, X);
    });
  }
}
function ef(Z, Q, X) {
  if (Q) {
    return Z.emit("error", Q);
  }
  if (X != null) {
    Z.push(X);
  }
  if (Z._writableState.length) {
    throw new F_ERR_TRANSFORM_WITH_LENGTH_0();
  }
  if (Z._transformState.transforming) {
    throw new F_ERR_TRANSFORM_ALREADY_TRANSFORMING();
  }
  return Z.push(null);
}
require("Hs")(eo, ei);
eo.prototype.push = function (Z, Q) {
  this._transformState.needTransform = false;
  return ei.prototype.push.call(this, Z, Q);
};
eo.prototype._transform = function (Z, Q, X) {
  X(new F_ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
eo.prototype._write = function (Z, Q, X) {
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
eo.prototype._read = function (Z) {
  const _transformState = this._transformState;
  if (_transformState.writechunk === null || _transformState.transforming) {
    _transformState.needTransform = true;
  } else {
    _transformState.transforming = true;
    this._transform(
      _transformState.writechunk,
      _transformState.writeencoding,
      _transformState.afterTransform,
    );
  }
};
eo.prototype._destroy = function (Z, Q) {
  ei.prototype._destroy.call(this, Z, function (Z) {
    Q(Z);
  });
};
