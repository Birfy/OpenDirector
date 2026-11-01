import $ from "./module-ai.js";
import { Rand } from "./module-Ip4.js";
class te {
  constructor(J) {
    this.rand = J || new Rand();
  }
  static create(J) {
    return new te(J);
  }
  _randbelow(J) {
    const Z = Math.ceil(J.bitLength() / 8);
    do var Q = new $(this.rand.generate(Z));
    while (Q.cmp(J) >= 0);
    return Q;
  }
  _randrange(J, Z) {
    const Q = Z.sub(J);
    return J.add(this._randbelow(Q));
  }
  test(J, Z, Q) {
    const tt = J.bitLength();
    const te = $.mont(J);
    const tr = new $(1).toRed(te);
    if (!Z) {
      Z = Math.max(1, (tt / 48) | 0);
    }
    for (var tn = J.subn(1), ti = 0; !tn.testn(ti); ti++);
    const to = J.shrn(ti);
    const ta = tn.toRed(te);
    for (; Z > 0; Z--) {
      const ts = this._randrange(new $(2), tn);
      if (Q) {
        Q(ts);
      }
      let tf = ts.toRed(te).redPow(to);
      if (tf.cmp(tr) !== 0 && tf.cmp(ta) !== 0) {
        for (var tu = 1; tu < ti; tu++) {
          if ((tf = tf.redSqr()).cmp(tr) === 0) {
            return false;
          }
          if (tf.cmp(ta) === 0) {
            break;
          }
        }
        if (tu === ti) {
          return false;
        }
      }
    }
    return true;
  }
  getDivisor(J, Z) {
    const Q = J.bitLength();
    const tt = $.mont(J);
    const te = new $(1).toRed(tt);
    if (!Z) {
      Z = Math.max(1, (Q / 48) | 0);
    }
    for (var tr = J.subn(1), tn = 0; !tr.testn(tn); tn++);
    const ti = J.shrn(tn);
    const to = tr.toRed(tt);
    for (; Z > 0; Z--) {
      const ta = this._randrange(new $(2), tr);
      const ts = J.gcd(ta);
      if (ts.cmpn(1) !== 0) {
        return ts;
      }
      let tf = ta.toRed(tt).redPow(ti);
      if (tf.cmp(te) !== 0 && tf.cmp(to) !== 0) {
        for (var tu = 1; tu < tn; tu++) {
          if ((tf = tf.redSqr()).cmp(te) === 0) {
            return tf.fromRed().subn(1).gcd(J);
          }
          if (tf.cmp(to) === 0) {
            break;
          }
        }
        if (tu === tn) {
          return (tf = tf.redSqr()).fromRed().subn(1).gcd(J);
        }
      }
    }
    return false;
  }
}
export default te;
