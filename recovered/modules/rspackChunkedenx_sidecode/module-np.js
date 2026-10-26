import { decoders, encoders } from "./module-nj.js";
import tt from "./module-ULy.js";
class te {
  constructor(J, Z) {
    this.name = J;
    this.body = Z;
    this.decoders = {};
    this.encoders = {};
  }
  _createNamed(J) {
    let Z;
    try {
      Z = require("./module-e8C.js").runInThisContext(
        "(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})",
      );
    } catch (J) {
      Z = function (J) {
        this._initNamed(J);
      };
    }
    tt(Z, J);
    Z.prototype._initNamed = function (Z) {
      J.call(this, Z);
    };
    return new Z(this);
  }
  _getDecoder(J) {
    J = J || "der";
    if (!this.decoders.hasOwnProperty(J)) {
      this.decoders[J] = this._createNamed(decoders[J]);
    }
    return this.decoders[J];
  }
  decode(J, Z, Q) {
    return this._getDecoder(Z).decode(J, Q);
  }
  _getEncoder(J) {
    J = J || "der";
    if (!this.encoders.hasOwnProperty(J)) {
      this.encoders[J] = this._createNamed(encoders[J]);
    }
    return this.encoders[J];
  }
  encode(J, Z, Q) {
    return this._getEncoder(Z).encode(J, Q);
  }
}
export const define = function (J, Z) {
  return new te(J, Z);
};
