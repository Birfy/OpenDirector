import { assert } from "./module-ty_2_2.js";
import tt from "./module-ai.js";
import te from "./module-ULy.js";
import tr from "./module-l8.js";
const assert_1 = assert;
function ti(J) {
  this.twisted = (0 | J.a) != 1;
  this.mOneA = this.twisted && (0 | J.a) == -1;
  this.extended = this.mOneA;
  tr.call(this, "edwards", J);
  this.a = new tt(J.a, 16).umod(this.red.m);
  this.a = this.a.toRed(this.red);
  this.c = new tt(J.c, 16).toRed(this.red);
  this.c2 = this.c.redSqr();
  this.d = new tt(J.d, 16).toRed(this.red);
  this.dd = this.d.redAdd(this.d);
  assert_1(!this.twisted || this.c.fromRed().cmpn(1) === 0);
  this.oneC = (0 | J.c) == 1;
}
function to(J, Z, Q, $, te) {
  tr.BasePoint.call(this, J, "projective");
  if (Z === null && Q === null && $ === null) {
    this.x = this.curve.zero;
    this.y = this.curve.one;
    this.z = this.curve.one;
    this.t = this.curve.zero;
    this.zOne = true;
  } else {
    this.x = new tt(Z, 16);
    this.y = new tt(Q, 16);
    this.z = $ ? new tt($, 16) : this.curve.one;
    this.t = te && new tt(te, 16);
    if (!this.x.red) {
      this.x = this.x.toRed(this.curve.red);
    }
    if (!this.y.red) {
      this.y = this.y.toRed(this.curve.red);
    }
    if (!this.z.red) {
      this.z = this.z.toRed(this.curve.red);
    }
    if (this.t && !this.t.red) {
      this.t = this.t.toRed(this.curve.red);
    }
    this.zOne = this.z === this.curve.one;
    if (this.curve.extended && !this.t) {
      this.t = this.x.redMul(this.y);
      if (!this.zOne) {
        this.t = this.t.redMul(this.z.redInvm());
      }
    }
  }
}
te(ti, tr);
export default ti;
ti.prototype._mulA = function (J) {
  if (this.mOneA) {
    return J.redNeg();
  }
  return this.a.redMul(J);
};
ti.prototype._mulC = function (J) {
  if (this.oneC) {
    return J;
  }
  return this.c.redMul(J);
};
ti.prototype.jpoint = function (J, Z, Q, $) {
  return this.point(J, Z, Q, $);
};
ti.prototype.pointFromX = function (J, Z) {
  if (!(J = new tt(J, 16)).red) {
    J = J.toRed(this.red);
  }
  const Q = J.redSqr();
  const $ = this.c2.redSub(this.a.redMul(Q));
  const te = this.one.redSub(this.c2.redMul(this.d).redMul(Q));
  const tr = $.redMul(te.redInvm());
  let tn = tr.redSqrt();
  if (tn.redSqr().redSub(tr).cmp(this.zero) !== 0) {
    throw Error("invalid point");
  }
  const ti = tn.fromRed().isOdd();
  if ((Z && !ti) || (!Z && ti)) {
    tn = tn.redNeg();
  }
  return this.point(J, tn);
};
ti.prototype.pointFromY = function (J, Z) {
  if (!(J = new tt(J, 16)).red) {
    J = J.toRed(this.red);
  }
  const Q = J.redSqr();
  const $ = Q.redSub(this.c2);
  const te = Q.redMul(this.d).redMul(this.c2).redSub(this.a);
  const tr = $.redMul(te.redInvm());
  if (tr.cmp(this.zero) === 0) {
    if (!Z) {
      return this.point(this.zero, J);
    } else {
      throw Error("invalid point");
    }
  }
  let tn = tr.redSqrt();
  if (tn.redSqr().redSub(tr).cmp(this.zero) !== 0) {
    throw Error("invalid point");
  }
  if (tn.fromRed().isOdd() !== Z) {
    tn = tn.redNeg();
  }
  return this.point(tn, J);
};
ti.prototype.validate = function (J) {
  if (J.isInfinity()) {
    return true;
  }
  J.normalize();
  const Z = J.x.redSqr();
  const Q = J.y.redSqr();
  const $ = Z.redMul(this.a).redAdd(Q);
  const tt = this.c2.redMul(this.one.redAdd(this.d.redMul(Z).redMul(Q)));
  return $.cmp(tt) === 0;
};
te(to, tr.BasePoint);
ti.prototype.pointFromJSON = function (J) {
  return to.fromJSON(this, J);
};
ti.prototype.point = function (J, Z, Q, $) {
  return new to(this, J, Z, Q, $);
};
to.fromJSON = function (J, Z) {
  return new to(J, Z[0], Z[1], Z[2]);
};
to.prototype.inspect = function () {
  if (this.isInfinity()) {
    return "<EC Point Infinity>";
  }
  return (
    "<EC Point x: " +
    this.x.fromRed().toString(16, 2) +
    " y: " +
    this.y.fromRed().toString(16, 2) +
    " z: " +
    this.z.fromRed().toString(16, 2) +
    ">"
  );
};
to.prototype.isInfinity = function () {
  return (
    this.x.cmpn(0) === 0 &&
    (this.y.cmp(this.z) === 0 || (this.zOne && this.y.cmp(this.curve.c) === 0))
  );
};
to.prototype._extDbl = function () {
  const J = this.x.redSqr();
  const Z = this.y.redSqr();
  let Q = this.z.redSqr();
  Q = Q.redIAdd(Q);
  const $ = this.curve._mulA(J);
  const tt = this.x.redAdd(this.y).redSqr().redISub(J).redISub(Z);
  const te = $.redAdd(Z);
  const tr = te.redSub(Q);
  const tn = $.redSub(Z);
  const ti = tt.redMul(tr);
  const to = te.redMul(tn);
  const ta = tt.redMul(tn);
  const ts = tr.redMul(te);
  return this.curve.point(ti, to, ts, ta);
};
to.prototype._projDbl = function () {
  let J;
  let Z;
  let Q;
  let $;
  let tt;
  let te;
  const tr = this.x.redAdd(this.y).redSqr();
  const tn = this.x.redSqr();
  const ti = this.y.redSqr();
  if (this.curve.twisted) {
    const to = ($ = this.curve._mulA(tn)).redAdd(ti);
    if (this.zOne) {
      J = tr.redSub(tn).redSub(ti).redMul(to.redSub(this.curve.two));
      Z = to.redMul($.redSub(ti));
      Q = to.redSqr().redSub(to).redSub(to);
    } else {
      tt = this.z.redSqr();
      te = to.redSub(tt).redISub(tt);
      J = tr.redSub(tn).redISub(ti).redMul(te);
      Z = to.redMul($.redSub(ti));
      Q = to.redMul(te);
    }
  } else {
    $ = tn.redAdd(ti);
    tt = this.curve._mulC(this.z).redSqr();
    te = $.redSub(tt).redSub(tt);
    J = this.curve._mulC(tr.redISub($)).redMul(te);
    Z = this.curve._mulC($).redMul(tn.redISub(ti));
    Q = $.redMul(te);
  }
  return this.curve.point(J, Z, Q);
};
to.prototype.dbl = function () {
  if (this.isInfinity()) {
    return this;
  }
  if (this.curve.extended) {
    return this._extDbl();
  }
  return this._projDbl();
};
to.prototype._extAdd = function (J) {
  const Z = this.y.redSub(this.x).redMul(J.y.redSub(J.x));
  const Q = this.y.redAdd(this.x).redMul(J.y.redAdd(J.x));
  const $ = this.t.redMul(this.curve.dd).redMul(J.t);
  const tt = this.z.redMul(J.z.redAdd(J.z));
  const te = Q.redSub(Z);
  const tr = tt.redSub($);
  const tn = tt.redAdd($);
  const ti = Q.redAdd(Z);
  const to = te.redMul(tr);
  const ta = tn.redMul(ti);
  const ts = te.redMul(ti);
  const tf = tr.redMul(tn);
  return this.curve.point(to, ta, tf, ts);
};
to.prototype._projAdd = function (J) {
  let Z;
  let Q;
  const $ = this.z.redMul(J.z);
  const tt = $.redSqr();
  const te = this.x.redMul(J.x);
  const tr = this.y.redMul(J.y);
  const tn = this.curve.d.redMul(te).redMul(tr);
  const ti = tt.redSub(tn);
  const to = tt.redAdd(tn);
  const ta = this.x
    .redAdd(this.y)
    .redMul(J.x.redAdd(J.y))
    .redISub(te)
    .redISub(tr);
  const ts = $.redMul(ti).redMul(ta);
  if (this.curve.twisted) {
    Z = $.redMul(to).redMul(tr.redSub(this.curve._mulA(te)));
    Q = ti.redMul(to);
  } else {
    Z = $.redMul(to).redMul(tr.redSub(te));
    Q = this.curve._mulC(ti).redMul(to);
  }
  return this.curve.point(ts, Z, Q);
};
to.prototype.add = function (J) {
  if (this.isInfinity()) {
    return J;
  }
  if (J.isInfinity()) {
    return this;
  }
  if (this.curve.extended) {
    return this._extAdd(J);
  }
  return this._projAdd(J);
};
to.prototype.mul = function (J) {
  if (this._hasDoubles(J)) {
    return this.curve._fixedNafMul(this, J);
  }
  return this.curve._wnafMul(this, J);
};
to.prototype.mulAdd = function (J, Z, Q) {
  return this.curve._wnafMulAdd(1, [this, Z], [J, Q], 2, false);
};
to.prototype.jmulAdd = function (J, Z, Q) {
  return this.curve._wnafMulAdd(1, [this, Z], [J, Q], 2, true);
};
to.prototype.normalize = function () {
  if (this.zOne) {
    return this;
  }
  const J = this.z.redInvm();
  this.x = this.x.redMul(J);
  this.y = this.y.redMul(J);
  if (this.t) {
    this.t = this.t.redMul(J);
  }
  this.z = this.curve.one;
  this.zOne = true;
  return this;
};
to.prototype.neg = function () {
  return this.curve.point(
    this.x.redNeg(),
    this.y,
    this.z,
    this.t && this.t.redNeg(),
  );
};
to.prototype.getX = function () {
  this.normalize();
  return this.x.fromRed();
};
to.prototype.getY = function () {
  this.normalize();
  return this.y.fromRed();
};
to.prototype.eq = function (J) {
  return (
    this === J ||
    (this.getX().cmp(J.getX()) === 0 && this.getY().cmp(J.getY()) === 0)
  );
};
to.prototype.eqXToP = function (J) {
  const Z = J.toRed(this.curve.red).redMul(this.z);
  if (this.x.cmp(Z) === 0) {
    return true;
  }
  const Q = J.clone();
  const $ = this.curve.redN.redMul(this.z);
  while (true) {
    Q.iadd(this.curve.n);
    if (Q.cmp(this.curve.p) >= 0) {
      return false;
    }
    Z.redIAdd($);
    if (this.x.cmp(Z) === 0) {
      return true;
    }
  }
};
to.prototype.toP = to.prototype.normalize;
to.prototype.mixedAdd = to.prototype.add;
