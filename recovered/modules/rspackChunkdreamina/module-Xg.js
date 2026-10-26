import i from "./module-Hs_2.js";
export function a(t) {
  this._reporterState = {
    obj: null,
    path: [],
    options: t || {},
    errors: [],
  };
}
function n(t, e) {
  this.path = t;
  this.rethrow(e);
}
a.prototype.isError = function (t) {
  return t instanceof n;
};
a.prototype.save = function () {
  const _reporterState = this._reporterState;
  return {
    obj: _reporterState.obj,
    pathLen: _reporterState.path.length,
  };
};
a.prototype.restore = function (t) {
  const _reporterState = this._reporterState;
  _reporterState.obj = t.obj;
  _reporterState.path = _reporterState.path.slice(0, t.pathLen);
};
a.prototype.enterKey = function (t) {
  return this._reporterState.path.push(t);
};
a.prototype.exitKey = function (t) {
  const _reporterState = this._reporterState;
  _reporterState.path = _reporterState.path.slice(0, t - 1);
};
a.prototype.leaveKey = function (t, e, r) {
  const _reporterState = this._reporterState;
  this.exitKey(t);
  if (_reporterState.obj !== null) {
    _reporterState.obj[e] = r;
  }
};
a.prototype.path = function () {
  return this._reporterState.path.join("/");
};
a.prototype.enterObject = function () {
  const _reporterState = this._reporterState;
  const t_obj = _reporterState.obj;
  _reporterState.obj = {};
  return t_obj;
};
a.prototype.leaveObject = function (t) {
  const _reporterState = this._reporterState;
  const e_obj = _reporterState.obj;
  _reporterState.obj = t;
  return e_obj;
};
a.prototype.error = function (t) {
  let e;
  const _reporterState = this._reporterState;
  const i = t instanceof n;
  e = i
    ? t
    : new n(
        _reporterState.path.map((t) => "[" + JSON.stringify(t) + "]").join(""),
        t.message || t,
        t.stack,
      );
  if (!_reporterState.options.partial) {
    throw e;
  }
  if (!i) {
    _reporterState.errors.push(e);
  }
  return e;
};
a.prototype.wrapResult = function (t) {
  const _reporterState = this._reporterState;
  if (_reporterState.options.partial) {
    return {
      result: this.isError(t) ? null : t,
      errors: _reporterState.errors,
    };
  }
  return t;
};
i(n, Error);
n.prototype.rethrow = function (t) {
  this.message = t + " at: " + (this.path || "(shallow)");
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, n);
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
