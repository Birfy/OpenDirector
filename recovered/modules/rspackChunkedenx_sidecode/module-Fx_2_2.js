import { sha512 } from "./module-T6.js";
import tt from "./module-YwN.js";
import { assert, intFromLE, parseBytes } from "./module-ty_2_2.js";
import ti from "./module-a0.js";
import to from "./module-hx.js";
const assert_1 = assert;
const parseBytes_1 = parseBytes;
class ta {
  constructor(J) {
    assert_1(J === "ed25519", "only tested with ed25519 so far");
    if (!(this instanceof ta)) {
      return new ta(J);
    }
    J = tt[J].curve;
    this.curve = J;
    this.g = J.g;
    this.g.precompute(J.n.bitLength() + 1);
    this.pointClass = J.point().constructor;
    this.encodingLength = Math.ceil(J.n.bitLength() / 8);
    this.hash = sha512;
  }
  sign(J, Z) {
    J = parseBytes_1(J);
    const Q = this.keyFromSecret(Z);
    const $ = this.hashInt(Q.messagePrefix(), J);
    const R = this.g.mul($);
    const Rencoded = this.encodePoint(R);
    const tr = this.hashInt(Rencoded, Q.pubBytes(), J).mul(Q.priv());
    const S = $.add(tr).umod(this.curve.n);
    return this.makeSignature({
      R,
      S,
      Rencoded,
    });
  }
  verify(J, Z, Q) {
    J = parseBytes_1(J);
    Z = this.makeSignature(Z);
    const $ = this.keyFromPublic(Q);
    const tt = this.hashInt(Z.Rencoded(), $.pubBytes(), J);
    const te = this.g.mul(Z.S());
    return Z.R().add($.pub().mul(tt)).eq(te);
  }
  hashInt() {
    const J = this.hash();
    for (let Z = 0; Z < arguments.length; Z++) {
      J.update(arguments[Z]);
    }
    return intFromLE(J.digest()).umod(this.curve.n);
  }
  keyFromPublic(J) {
    return ti.fromPublic(this, J);
  }
  keyFromSecret(J) {
    return ti.fromSecret(this, J);
  }
  makeSignature(J) {
    if (J instanceof to) {
      return J;
    }
    return new to(this, J);
  }
  encodePoint(J) {
    const Z = J.getY().toArray("le", this.encodingLength);
    Z[this.encodingLength - 1] |= 128 * !!J.getX().isOdd();
    return Z;
  }
  decodePoint(J) {
    const Z = (J = parseBytes(J)).length - 1;
    const Q = J.slice(0, Z).concat(-129 & J[Z]);
    const $ = (128 & J[Z]) != 0;
    const tt = intFromLE(Q);
    return this.curve.pointFromY(tt, $);
  }
  encodeInt(J) {
    return J.toArray("le", this.encodingLength);
  }
  decodeInt(J) {
    return intFromLE(J);
  }
  isPoint(J) {
    return J instanceof this.pointClass;
  }
}
export default ta;
