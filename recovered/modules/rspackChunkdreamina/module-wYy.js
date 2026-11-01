import { Buffer } from "b58";
import { Transform } from "Y9";
import { I } from "Ng";
function a(t) {
  Transform.call(this);
  this.hashMode = typeof t === "string";
  if (this.hashMode) {
    this[t] = this._finalOrDigest;
  } else {
    this.final = this._finalOrDigest;
  }
  if (this._final) {
    this.__final = this._final;
    this._final = null;
  }
  this._decoder = null;
  this._encoding = null;
}
require("./module-Hs_2.js")(a, Transform);
a.prototype.update = function (t, e, r) {
  if (typeof t === "string") {
    t = Buffer.from(t, e);
  }
  let f = this._update(t);
  if (this.hashMode) {
    return this;
  }
  if (r) {
    f = this._toString(f, r);
  }
  return f;
};
a.prototype.setAutoPadding = function () {};
a.prototype.getAuthTag = function () {
  throw Error("trying to get auth tag in unsupported state");
};
a.prototype.setAuthTag = function () {
  throw Error("trying to set auth tag in unsupported state");
};
a.prototype.setAAD = function () {
  throw Error("trying to set aad in unsupported state");
};
a.prototype._transform = function (t, e, r) {
  let i;
  try {
    if (this.hashMode) {
      this._update(t);
    } else {
      this.push(this._update(t));
    }
  } catch (error) {
    i = error;
  } finally {
    r(i);
  }
};
a.prototype._flush = function (t) {
  let e;
  try {
    this.push(this.__final());
  } catch (error) {
    e = error;
  }
  t(e);
};
a.prototype._finalOrDigest = function (t) {
  let e = this.__final() || Buffer.alloc(0);
  if (t) {
    e = this._toString(e, t, true);
  }
  return e;
};
a.prototype._toString = function (t, e, r) {
  if (!this._decoder) {
    this._decoder = new I(e);
    this._encoding = e;
  }
  if (this._encoding !== e) {
    throw Error("can't switch encodings");
  }
  let i = this._decoder.write(t);
  if (r) {
    i += this._decoder.end();
  }
  return i;
};
export default a;
