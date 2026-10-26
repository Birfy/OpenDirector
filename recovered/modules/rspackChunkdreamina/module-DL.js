import { sha512 } from "./module-Tis.js";
import f from "./module-Iez.js";
import { assert, intFromLE, parseBytes } from "./module-M1_2.js";
import o from "./module-bBR.js";
import h from "./module-Vt.js";
const assert_1 = assert;
const parseBytes_1 = parseBytes;
class d {
  constructor(t) {
    assert_1(t === "ed25519", "only tested with ed25519 so far");
    if (!(this instanceof d)) {
      return new d(t);
    }
    t = f[t].curve;
    this.curve = t;
    this.g = t.g;
    this.g.precompute(t.n.bitLength() + 1);
    this.pointClass = t.point().constructor;
    this.encodingLength = Math.ceil(t.n.bitLength() / 8);
    this.hash = sha512;
  }
  sign(t, e) {
    t = parseBytes_1(t);
    const r = this.keyFromSecret(e);
    const i = this.hashInt(r.messagePrefix(), t);
    const R = this.g.mul(i);
    const Rencoded = this.encodePoint(R);
    const a = this.hashInt(Rencoded, r.pubBytes(), t).mul(r.priv());
    const S = i.add(a).umod(this.curve.n);
    return this.makeSignature({
      R,
      S,
      Rencoded,
    });
  }
  verify(t, e, r) {
    t = parseBytes_1(t);
    e = this.makeSignature(e);
    const i = this.keyFromPublic(r);
    const f = this.hashInt(e.Rencoded(), i.pubBytes(), t);
    const n = this.g.mul(e.S());
    return e.R().add(i.pub().mul(f)).eq(n);
  }
  hashInt() {
    const t = this.hash();
    for (let e = 0; e < arguments.length; e++) {
      t.update(arguments[e]);
    }
    return intFromLE(t.digest()).umod(this.curve.n);
  }
  keyFromPublic(t) {
    return o.fromPublic(this, t);
  }
  keyFromSecret(t) {
    return o.fromSecret(this, t);
  }
  makeSignature(t) {
    if (t instanceof h) {
      return t;
    }
    return new h(this, t);
  }
  encodePoint(t) {
    const e = t.getY().toArray("le", this.encodingLength);
    e[this.encodingLength - 1] |= 128 * !!t.getX().isOdd();
    return e;
  }
  decodePoint(t) {
    const e = (t = parseBytes(t)).length - 1;
    const r = t.slice(0, e).concat(-129 & t[e]);
    const i = (128 & t[e]) != 0;
    const f = intFromLE(r);
    return this.curve.pointFromY(f, i);
  }
  encodeInt(t) {
    return t.toArray("le", this.encodingLength);
  }
  decodeInt(t) {
    return intFromLE(t);
  }
  isPoint(t) {
    return t instanceof this.pointClass;
  }
}
export default d;
