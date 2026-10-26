import i from "./module-cGB.js";
import f from "./module-ao_2.js";
import { assert } from "./module-M1_2.js";
import a from "./module-Iez.js";
import s from "./module-dk.js";
import h from "./module-Vn.js";
import d from "./module-RS.js";
const assert_1 = assert;
class c {
  constructor(curve) {
    if (!(this instanceof c)) {
      return new c(curve);
    }
    if (typeof curve === "string") {
      assert_1(
        Object.prototype.hasOwnProperty.call(a, curve),
        "Unknown curve " + curve,
      );
      curve = a[curve];
    }
    if (curve instanceof a.PresetCurve) {
      curve = {
        curve,
      };
    }
    this.curve = curve.curve.curve;
    this.n = this.curve.n;
    this.nh = this.n.ushrn(1);
    this.g = this.curve.g;
    this.g = curve.curve.g;
    this.g.precompute(curve.curve.n.bitLength() + 1);
    this.hash = curve.hash || curve.curve.hash;
  }
  keyPair(t) {
    return new h(this, t);
  }
  keyFromPrivate(t, e) {
    return h.fromPrivate(this, t, e);
  }
  keyFromPublic(t, e) {
    return h.fromPublic(this, t, e);
  }
  genKeyPair(t) {
    if (!t) {
      t = {};
    }
    const e = new f({
      hash: this.hash,
      pers: t.pers,
      persEnc: t.persEnc || "utf8",
      entropy: t.entropy || s(this.hash.hmacStrength),
      entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
      nonce: this.n.toArray(),
    });
    const r = this.n.byteLength();
    const n = this.n.sub(new i(2));
    while (true) {
      const a = new i(e.generate(r));
      if (!(a.cmp(n) > 0)) {
        a.iaddn(1);
        return this.keyFromPrivate(a);
      }
    }
  }
  _truncateToN(t, e) {
    const r = 8 * t.byteLength() - this.n.bitLength();
    if (r > 0) {
      t = t.ushrn(r);
    }
    if (!e && t.cmp(this.n) >= 0) {
      return t.sub(this.n);
    }
    return t;
  }
  sign(t, e, r, n) {
    if (typeof r === "object") {
      n = r;
      r = null;
    }
    if (!n) {
      n = {};
    }
    e = this.keyFromPrivate(e, r);
    t = this._truncateToN(new i(t, 16));
    const a = this.n.byteLength();
    const entropy = e.getPrivate().toArray("be", a);
    const nonce = t.toArray("be", a);
    const h = new f({
      hash: this.hash,
      entropy,
      nonce,
      pers: n.pers,
      persEnc: n.persEnc || "utf8",
    });
    const c = this.n.sub(new i(1));
    for (let u = 0; ; u++) {
      let l = n.k ? n.k(u) : new i(h.generate(this.n.byteLength()));
      if ((l = this._truncateToN(l, true)).cmpn(1) <= 0 || l.cmp(c) >= 0) {
        continue;
      }
      const b = this.g.mul(l);
      if (!b.isInfinity()) {
        const p = b.getX();
        const r_1 = p.umod(this.n);
        if (r_1.cmpn(0) !== 0) {
          let s_1 = l.invm(this.n).mul(r_1.mul(e.getPrivate()).iadd(t));
          if ((s_1 = s_1.umod(this.n)).cmpn(0) !== 0) {
            let recoveryParam = !!b.getY().isOdd() | (2 * (p.cmp(r_1) !== 0));
            if (n.canonical && s_1.cmp(this.nh) > 0) {
              s_1 = this.n.sub(s_1);
              recoveryParam ^= 1;
            }
            return new d({
              r: r_1,
              s: s_1,
              recoveryParam,
            });
          }
        }
      }
    }
  }
  verify(t, e, r, f) {
    t = this._truncateToN(new i(t, 16));
    r = this.keyFromPublic(r, f);
    let n;
    const a = (e = new d(e, "hex")).r;
    const s = e.s;
    if (
      a.cmpn(1) < 0 ||
      a.cmp(this.n) >= 0 ||
      s.cmpn(1) < 0 ||
      s.cmp(this.n) >= 0
    ) {
      return false;
    }
    const o = s.invm(this.n);
    const h = o.mul(t).umod(this.n);
    const c = o.mul(a).umod(this.n);
    if (this.curve._maxwellTrick) {
      return (
        !(n = this.g.jmulAdd(h, r.getPublic(), c)).isInfinity() && n.eqXToP(a)
      );
    }
    return (
      !(n = this.g.mulAdd(h, r.getPublic(), c)).isInfinity() &&
      n.getX().umod(this.n).cmp(a) === 0
    );
  }
  recoverPubKey(t, e, r, f) {
    assert_1((3 & r) === r, "The recovery param is more than two bits");
    e = new d(e, f);
    const n = this.n;
    const a = new i(t);
    let s = e.r;
    const h = e.s;
    const c = 1 & r;
    const u = r >> 1;
    if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) {
      throw Error("Unable to find sencond key candinate");
    }
    s = u
      ? this.curve.pointFromX(s.add(this.curve.n), c)
      : this.curve.pointFromX(s, c);
    const l = e.r.invm(n);
    const b = n.sub(a).mul(l).umod(n);
    const p = h.mul(l).umod(n);
    return this.g.mulAdd(b, s, p);
  }
  getKeyRecoveryParam(t, e, r, i) {
    if ((e = new d(e, i)).recoveryParam !== null) {
      return e.recoveryParam;
    }
    let f;
    for (let n = 0; n < 4; n++) {
      try {
        f = this.recoverPubKey(t, e, n);
      } catch (t) {
        continue;
      }
      if (f.eq(r)) {
        return n;
      }
    }
    throw Error("Unable to find valid recovery factor");
  }
}
export default c;
