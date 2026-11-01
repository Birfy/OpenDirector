import { F } from "./module-abl.js";
import ti from "./module-zD_2_2.js";
export default ta;
const F_ERR_METHOD_NOT_IMPLEMENTED = F.ERR_METHOD_NOT_IMPLEMENTED;
const F_ERR_MULTIPLE_CALLBACK = F.ERR_MULTIPLE_CALLBACK;
const F_ERR_TRANSFORM_ALREADY_TRANSFORMING =
  F.ERR_TRANSFORM_ALREADY_TRANSFORMING;
const F_ERR_TRANSFORM_WITH_LENGTH_0 = F.ERR_TRANSFORM_WITH_LENGTH_0;
function to(J, Z) {
  const _transformState = this._transformState;
  _transformState.transforming = false;
  const Q_writecb = _transformState.writecb;
  if (Q_writecb === null) {
    return this.emit("error", new F_ERR_MULTIPLE_CALLBACK());
  }
  _transformState.writechunk = null;
  _transformState.writecb = null;
  if (Z != null) {
    this.push(Z);
  }
  Q_writecb(J);
  const _readableState = this._readableState;
  _readableState.reading = false;
  if (
    _readableState.needReadable ||
    _readableState.length < _readableState.highWaterMark
  ) {
    this._read(_readableState.highWaterMark);
  }
}
function ta(J) {
  if (!(this instanceof ta)) {
    return new ta(J);
  }
  ti.call(this, J);
  this._transformState = {
    afterTransform: to.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null,
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (J) {
    if (typeof J.transform === "function") {
      this._transform = J.transform;
    }
    if (typeof J.flush === "function") {
      this._flush = J.flush;
    }
  }
  this.on("prefinish", ts);
}
function ts() {
  const J = this;
  if (typeof this._flush !== "function" || this._readableState.destroyed) {
    tf(this, null, null);
  } else {
    this._flush(function (Z, Q) {
      tf(J, Z, Q);
    });
  }
}
function tf(J, Z, Q) {
  if (Z) {
    return J.emit("error", Z);
  }
  if (Q != null) {
    J.push(Q);
  }
  if (J._writableState.length) {
    throw new F_ERR_TRANSFORM_WITH_LENGTH_0();
  }
  if (J._transformState.transforming) {
    throw new F_ERR_TRANSFORM_ALREADY_TRANSFORMING();
  }
  return J.push(null);
}
require("./module-ULy.js")(ta, ti);
ta.prototype.push = function (J, Z) {
  this._transformState.needTransform = false;
  return ti.prototype.push.call(this, J, Z);
};
ta.prototype._transform = function (J, Z, Q) {
  Q(new F_ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
ta.prototype._write = function (J, Z, Q) {
  const _transformState = this._transformState;
  _transformState.writecb = Q;
  _transformState.writechunk = J;
  _transformState.writeencoding = Z;
  if (!_transformState.transforming) {
    const tt = this._readableState;
    if (
      _transformState.needTransform ||
      tt.needReadable ||
      tt.length < tt.highWaterMark
    ) {
      this._read(tt.highWaterMark);
    }
  }
};
ta.prototype._read = function (J) {
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
ta.prototype._destroy = function (J, Z) {
  ti.prototype._destroy.call(this, J, function (J) {
    Z(J);
  });
};
