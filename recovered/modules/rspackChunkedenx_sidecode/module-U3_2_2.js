import $ from "./module-ai.js";
import tt from "./module-pPM.js";
import { assert } from "./module-ty_2_2.js";
import tr from "./module-YwN.js";
import tn from "./module-Ip4.js";
import to from "./module-Ds.js";
import ta from "./module-nS.js";
const assert_1 = assert;
class ts {
  constructor(curve) {
    if (!(this instanceof ts)) {
      return new ts(curve);
    }
    if (typeof curve === "string") {
      assert_1(
        Object.prototype.hasOwnProperty.call(tr, curve),
        "Unknown curve " + curve,
      );
      curve = tr[curve];
    }
    if (curve instanceof tr.PresetCurve) {
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
  keyPair(J) {
    return new to(this, J);
  }
  keyFromPrivate(J, Z) {
    return to.fromPrivate(this, J, Z);
  }
  keyFromPublic(J, Z) {
    return to.fromPublic(this, J, Z);
  }
  genKeyPair(J) {
    if (!J) {
      J = {};
    }
    const Z = new tt({
      hash: this.hash,
      pers: J.pers,
      persEnc: J.persEnc || "utf8",
      entropy: J.entropy || tn(this.hash.hmacStrength),
      entropyEnc: (J.entropy && J.entropyEnc) || "utf8",
      nonce: this.n.toArray(),
    });
    const Q = this.n.byteLength();
    const te = this.n.sub(new $(2));
    while (true) {
      const tr = new $(Z.generate(Q));
      if (!(tr.cmp(te) > 0)) {
        tr.iaddn(1);
        return this.keyFromPrivate(tr);
      }
    }
  }
  _truncateToN(J, Z) {
    const Q = 8 * J.byteLength() - this.n.bitLength();
    if (Q > 0) {
      J = J.ushrn(Q);
    }
    if (!Z && J.cmp(this.n) >= 0) {
      return J.sub(this.n);
    }
    return J;
  }
  sign(J, Z, Q, te) {
    if (typeof Q === "object") {
      te = Q;
      Q = null;
    }
    if (!te) {
      te = {};
    }
    Z = this.keyFromPrivate(Z, Q);
    J = this._truncateToN(new $(J, 16));
    const tr = this.n.byteLength();
    const entropy = Z.getPrivate().toArray("be", tr);
    const nonce = J.toArray("be", tr);
    const to = new tt({
      hash: this.hash,
      entropy,
      nonce,
      pers: te.pers,
      persEnc: te.persEnc || "utf8",
    });
    const ts = this.n.sub(new $(1));
    for (let tf = 0; ; tf++) {
      let tu = te.k ? te.k(tf) : new $(to.generate(this.n.byteLength()));
      if ((tu = this._truncateToN(tu, true)).cmpn(1) <= 0 || tu.cmp(ts) >= 0) {
        continue;
      }
      const tc = this.g.mul(tu);
      if (!tc.isInfinity()) {
        const th = tc.getX();
        const r = th.umod(this.n);
        if (r.cmpn(0) !== 0) {
          let s = tu.invm(this.n).mul(r.mul(Z.getPrivate()).iadd(J));
          if ((s = s.umod(this.n)).cmpn(0) !== 0) {
            let recoveryParam = !!tc.getY().isOdd() | (2 * (th.cmp(r) !== 0));
            if (te.canonical && s.cmp(this.nh) > 0) {
              s = this.n.sub(s);
              recoveryParam ^= 1;
            }
            return new ta({
              r,
              s,
              recoveryParam,
            });
          }
        }
      }
    }
  }
  verify(J, Z, Q, tt) {
    J = this._truncateToN(new $(J, 16));
    Q = this.keyFromPublic(Q, tt);
    let te;
    const tr = (Z = new ta(Z, "hex")).r;
    const tn = Z.s;
    if (
      tr.cmpn(1) < 0 ||
      tr.cmp(this.n) >= 0 ||
      tn.cmpn(1) < 0 ||
      tn.cmp(this.n) >= 0
    ) {
      return false;
    }
    const ti = tn.invm(this.n);
    const to = ti.mul(J).umod(this.n);
    const ts = ti.mul(tr).umod(this.n);
    if (this.curve._maxwellTrick) {
      return (
        !(te = this.g.jmulAdd(to, Q.getPublic(), ts)).isInfinity() &&
        te.eqXToP(tr)
      );
    }
    return (
      !(te = this.g.mulAdd(to, Q.getPublic(), ts)).isInfinity() &&
      te.getX().umod(this.n).cmp(tr) === 0
    );
  }
  recoverPubKey(J, Z, Q, tt) {
    assert_1((3 & Q) === Q, "The recovery param is more than two bits");
    Z = new ta(Z, tt);
    const te = this.n;
    const tr = new $(J);
    let tn = Z.r;
    const to = Z.s;
    const ts = 1 & Q;
    const tf = Q >> 1;
    if (tn.cmp(this.curve.p.umod(this.curve.n)) >= 0 && tf) {
      throw Error("Unable to find sencond key candinate");
    }
    tn = tf
      ? this.curve.pointFromX(tn.add(this.curve.n), ts)
      : this.curve.pointFromX(tn, ts);
    const tu = Z.r.invm(te);
    const tc = te.sub(tr).mul(tu).umod(te);
    const th = to.mul(tu).umod(te);
    return this.g.mulAdd(tc, tn, th);
  }
  getKeyRecoveryParam(J, Z, Q, $) {
    if ((Z = new ta(Z, $)).recoveryParam !== null) {
      return Z.recoveryParam;
    }
    let tt;
    for (let te = 0; te < 4; te++) {
      try {
        tt = this.recoverPubKey(J, Z, te);
      } catch (J) {
        continue;
      }
      if (tt.eq(Q)) {
        return te;
      }
    }
    throw Error("Unable to find valid recovery factor");
  }
}
export default ts;
