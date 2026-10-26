import $ from "./module-ai.js";
import { assert, cachedProperty, encode, parseBytes } from "./module-ty_2_2.js";
const assert_1 = assert;
const cachedProperty_1 = cachedProperty;
const parseBytes_1 = parseBytes;
function ti(J, Z) {
  this.eddsa = J;
  if (typeof Z !== "object") {
    Z = parseBytes_1(Z);
  }
  if (Array.isArray(Z)) {
    Z = {
      R: Z.slice(0, J.encodingLength),
      S: Z.slice(J.encodingLength),
    };
  }
  assert_1(Z.R && Z.S, "Signature without R or S");
  if (J.isPoint(Z.R)) {
    this._R = Z.R;
  }
  if (Z.S instanceof $) {
    this._S = Z.S;
  }
  this._Rencoded = Array.isArray(Z.R) ? Z.R : Z.Rencoded;
  this._Sencoded = Array.isArray(Z.S) ? Z.S : Z.Sencoded;
}
cachedProperty_1(ti, "S", function () {
  return this.eddsa.decodeInt(this.Sencoded());
});
cachedProperty_1(ti, "R", function () {
  return this.eddsa.decodePoint(this.Rencoded());
});
cachedProperty_1(ti, "Rencoded", function () {
  return this.eddsa.encodePoint(this.R());
});
cachedProperty_1(ti, "Sencoded", function () {
  return this.eddsa.encodeInt(this.S());
});
ti.prototype.toBytes = function () {
  return this.Rencoded().concat(this.Sencoded());
};
ti.prototype.toHex = function () {
  return encode(this.toBytes(), "hex").toUpperCase();
};
export default ti;
