import $ from "cGB";
import ee from "dk";
class et {
  constructor(Z) {
    this.rand = Z || new ee.Rand();
  }
  static create(Z) {
    return new et(Z);
  }
  _randbelow(Z) {
    const Q = Math.ceil(Z.bitLength() / 8);
    do var X = new $(this.rand.generate(Q));
    while (X.cmp(Z) >= 0);
    return X;
  }
  _randrange(Z, Q) {
    const X = Q.sub(Z);
    return Z.add(this._randbelow(X));
  }
  test(Z, Q, X) {
    const ee = Z.bitLength();
    const et = $.mont(Z);
    const er = new $(1).toRed(et);
    if (!Q) {
      Q = Math.max(1, (ee / 48) | 0);
    }
    for (var en = Z.subn(1), ei = 0; !en.testn(ei); ei++);
    const ea = Z.shrn(ei);
    const eo = en.toRed(et);
    for (; Q > 0; Q--) {
      const es = this._randrange(new $(2), en);
      if (X) {
        X(es);
      }
      let ef = es.toRed(et).redPow(ea);
      if (ef.cmp(er) !== 0 && ef.cmp(eo) !== 0) {
        for (var eu = 1; eu < ei; eu++) {
          if ((ef = ef.redSqr()).cmp(er) === 0) {
            return false;
          }
          if (ef.cmp(eo) === 0) {
            break;
          }
        }
        if (eu === ei) {
          return false;
        }
      }
    }
    return true;
  }
  getDivisor(Z, Q) {
    const X = Z.bitLength();
    const ee = $.mont(Z);
    const et = new $(1).toRed(ee);
    if (!Q) {
      Q = Math.max(1, (X / 48) | 0);
    }
    for (var er = Z.subn(1), en = 0; !er.testn(en); en++);
    const ei = Z.shrn(en);
    const ea = er.toRed(ee);
    for (; Q > 0; Q--) {
      const eo = this._randrange(new $(2), er);
      const es = Z.gcd(eo);
      if (es.cmpn(1) !== 0) {
        return es;
      }
      let ef = eo.toRed(ee).redPow(ei);
      if (ef.cmp(et) !== 0 && ef.cmp(ea) !== 0) {
        for (var eu = 1; eu < en; eu++) {
          if ((ef = ef.redSqr()).cmp(et) === 0) {
            return ef.fromRed().subn(1).gcd(Z);
          }
          if (ef.cmp(ea) === 0) {
            break;
          }
        }
        if (eu === en) {
          return (ef = ef.redSqr()).fromRed().subn(1).gcd(Z);
        }
      }
    }
    return false;
  }
}
export default et;
