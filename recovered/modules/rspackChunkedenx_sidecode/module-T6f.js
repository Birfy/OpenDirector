import $ from "./module-ULy.js";
function tt(J) {
  this._reporterState = {
    obj: null,
    path: [],
    options: J || {},
    errors: [],
  };
}
function te(J, Z) {
  this.path = J;
  this.rethrow(Z);
}
export { tt as a };
tt.prototype.isError = function (J) {
  return J instanceof te;
};
tt.prototype.save = function () {
  const _reporterState = this._reporterState;
  return {
    obj: _reporterState.obj,
    pathLen: _reporterState.path.length,
  };
};
tt.prototype.restore = function (J) {
  const _reporterState = this._reporterState;
  _reporterState.obj = J.obj;
  _reporterState.path = _reporterState.path.slice(0, J.pathLen);
};
tt.prototype.enterKey = function (J) {
  return this._reporterState.path.push(J);
};
tt.prototype.exitKey = function (J) {
  const _reporterState = this._reporterState;
  _reporterState.path = _reporterState.path.slice(0, J - 1);
};
tt.prototype.leaveKey = function (J, Z, Q) {
  const _reporterState = this._reporterState;
  this.exitKey(J);
  if (_reporterState.obj !== null) {
    _reporterState.obj[Z] = Q;
  }
};
tt.prototype.path = function () {
  return this._reporterState.path.join("/");
};
tt.prototype.enterObject = function () {
  const _reporterState = this._reporterState;
  const J_obj = _reporterState.obj;
  _reporterState.obj = {};
  return J_obj;
};
tt.prototype.leaveObject = function (J) {
  const _reporterState = this._reporterState;
  const Z_obj = _reporterState.obj;
  _reporterState.obj = J;
  return Z_obj;
};
tt.prototype.error = function (J) {
  let Z;
  const _reporterState = this._reporterState;
  const $ = J instanceof te;
  Z = $
    ? J
    : new te(
        _reporterState.path.map((J) => "[" + JSON.stringify(J) + "]").join(""),
        J.message || J,
        J.stack,
      );
  if (!_reporterState.options.partial) {
    throw Z;
  }
  if (!$) {
    _reporterState.errors.push(Z);
  }
  return Z;
};
tt.prototype.wrapResult = function (J) {
  const _reporterState = this._reporterState;
  if (_reporterState.options.partial) {
    return {
      result: this.isError(J) ? null : J,
      errors: _reporterState.errors,
    };
  }
  return J;
};
$(te, Error);
te.prototype.rethrow = function (J) {
  this.message = J + " at: " + (this.path || "(shallow)");
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, te);
  }
  if (!this.stack) {
    try {
      throw Error(this.message);
    } catch (error) {
      this.stack = error.stack;
    }
  }
  return this;
};
