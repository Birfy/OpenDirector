import i from "./module-cGB.js";
import { assert, cachedProperty, encode, parseBytes } from "./module-M1_2.js";
const assert_1 = assert;
const cachedProperty_1 = cachedProperty;
const parseBytes_1 = parseBytes;
function o(t, e) {
  this.eddsa = t;
  if (typeof e !== "object") {
    e = parseBytes_1(e);
  }
  if (Array.isArray(e)) {
    e = {
      R: e.slice(0, t.encodingLength),
      S: e.slice(t.encodingLength),
    };
  }
  assert_1(e.R && e.S, "Signature without R or S");
  if (t.isPoint(e.R)) {
    this._R = e.R;
  }
  if (e.S instanceof i) {
    this._S = e.S;
  }
  this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded;
  this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded;
}
cachedProperty_1(o, "S", function () {
  return this.eddsa.decodeInt(this.Sencoded());
});
cachedProperty_1(o, "R", function () {
  return this.eddsa.decodePoint(this.Rencoded());
});
cachedProperty_1(o, "Rencoded", function () {
  return this.eddsa.encodePoint(this.R());
});
cachedProperty_1(o, "Sencoded", function () {
  return this.eddsa.encodeInt(this.S());
});
o.prototype.toBytes = function () {
  return this.Rencoded().concat(this.Sencoded());
};
o.prototype.toHex = function () {
  return encode(this.toBytes(), "hex").toUpperCase();
};
export default o;
