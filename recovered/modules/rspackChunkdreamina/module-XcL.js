import { decoders, encoders } from "./module-sG.js";
import f from "./module-Hs_2.js";
class n {
  constructor(t, e) {
    this.name = t;
    this.body = e;
    this.decoders = {};
    this.encoders = {};
  }
  _createNamed(t) {
    let e;
    try {
      e = require("zk").runInThisContext(
        "(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})",
      );
    } catch (t) {
      e = function (t) {
        this._initNamed(t);
      };
    }
    f(e, t);
    e.prototype._initNamed = function (e) {
      t.call(this, e);
    };
    return new e(this);
  }
  _getDecoder(t) {
    t = t || "der";
    if (!this.decoders.hasOwnProperty(t)) {
      this.decoders[t] = this._createNamed(decoders[t]);
    }
    return this.decoders[t];
  }
  decode(t, e, r) {
    return this._getDecoder(e).decode(t, r);
  }
  _getEncoder(t) {
    t = t || "der";
    if (!this.encoders.hasOwnProperty(t)) {
      this.encoders[t] = this._createNamed(encoders[t]);
    }
    return this.encoders[t];
  }
  encode(t, e, r) {
    return this._getEncoder(e).encode(t, r);
  }
}
export const define = function (t, e) {
  return new n(t, e);
};
