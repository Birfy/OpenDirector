import { Buffer } from "./module-s6_2_2.js";
import { Transform } from "./module-Cp_2_2.js";
import { I } from "./module-gU.js";
function tr(J) {
  Transform.call(this);
  this.hashMode = typeof J === "string";
  if (this.hashMode) {
    this[J] = this._finalOrDigest;
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
require("./module-ULy.js")(tr, Transform);
tr.prototype.update = function (J, Z, Q) {
  if (typeof J === "string") {
    J = Buffer.from(J, Z);
  }
  let tt = this._update(J);
  if (this.hashMode) {
    return this;
  }
  if (Q) {
    tt = this._toString(tt, Q);
  }
  return tt;
};
tr.prototype.setAutoPadding = function () {};
tr.prototype.getAuthTag = function () {
  throw Error("trying to get auth tag in unsupported state");
};
tr.prototype.setAuthTag = function () {
  throw Error("trying to set auth tag in unsupported state");
};
tr.prototype.setAAD = function () {
  throw Error("trying to set aad in unsupported state");
};
tr.prototype._transform = function (J, Z, Q) {
  let $;
  try {
    if (this.hashMode) {
      this._update(J);
    } else {
      this.push(this._update(J));
    }
  } catch (error) {
    $ = error;
  } finally {
    Q($);
  }
};
tr.prototype._flush = function (J) {
  let Z;
  try {
    this.push(this.__final());
  } catch (error) {
    Z = error;
  }
  J(Z);
};
tr.prototype._finalOrDigest = function (J) {
  let Z = this.__final() || Buffer.alloc(0);
  if (J) {
    Z = this._toString(Z, J, true);
  }
  return Z;
};
tr.prototype._toString = function (J, Z, Q) {
  if (!this._decoder) {
    this._decoder = new I(Z);
    this._encoding = Z;
  }
  if (this._encoding !== Z) {
    throw Error("can't switch encodings");
  }
  let $ = this._decoder.write(J);
  if (Q) {
    $ += this._decoder.end();
  }
  return $;
};
export default tr;
