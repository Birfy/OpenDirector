import $ from "./module-ef.js";
export default tr;
const tt = Object.create(require("./module-H96.js"));
function te(J, Z) {
  const _transformState = this._transformState;
  _transformState.transforming = false;
  const Q_writecb = _transformState.writecb;
  if (!Q_writecb) {
    return this.emit("error", Error("write callback called multiple times"));
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
function tr(J) {
  if (!(this instanceof tr)) {
    return new tr(J);
  }
  $.call(this, J);
  this._transformState = {
    afterTransform: te.bind(this),
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
  this.on("prefinish", tn);
}
function tn() {
  const J = this;
  if (typeof this._flush === "function") {
    this._flush(function (Z, Q) {
      ti(J, Z, Q);
    });
  } else {
    ti(this, null, null);
  }
}
function ti(J, Z, Q) {
  if (Z) {
    return J.emit("error", Z);
  }
  if (Q != null) {
    J.push(Q);
  }
  if (J._writableState.length) {
    throw Error("Calling transform done when ws.length != 0");
  }
  if (J._transformState.transforming) {
    throw Error("Calling transform done when still transforming");
  }
  return J.push(null);
}
tt.inherits = require("./module-ULy.js");
tt.inherits(tr, $);
tr.prototype.push = function (J, Z) {
  this._transformState.needTransform = false;
  return $.prototype.push.call(this, J, Z);
};
tr.prototype._transform = function (J, Z, Q) {
  throw Error("_transform() is not implemented");
};
tr.prototype._write = function (J, Z, Q) {
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
tr.prototype._read = function (J) {
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
tr.prototype._destroy = function (J, Z) {
  const Q = this;
  $.prototype._destroy.call(this, J, function (J) {
    Z(J);
    Q.emit("close");
  });
};
