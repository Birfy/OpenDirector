import $ from "./module-ai.js";
import tt from "./module-ULy.js";
import te from "./module-l8.js";
import { toArray } from "./module-ty_2_2.js";
function tn(J) {
  te.call(this, "mont", J);
  this.a = new $(J.a, 16).toRed(this.red);
  this.b = new $(J.b, 16).toRed(this.red);
  this.i4 = new $(4).toRed(this.red).redInvm();
  this.two = new $(2).toRed(this.red);
  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}
function ti(J, Z, Q) {
  te.BasePoint.call(this, J, "projective");
  if (Z === null && Q === null) {
    this.x = this.curve.one;
    this.z = this.curve.zero;
  } else {
    this.x = new $(Z, 16);
    this.z = new $(Q, 16);
    if (!this.x.red) {
      this.x = this.x.toRed(this.curve.red);
    }
    if (!this.z.red) {
      this.z = this.z.toRed(this.curve.red);
    }
  }
}
tt(tn, te);
export default tn;
tn.prototype.validate = function (J) {
  const Z = J.normalize().x;
  const Q = Z.redSqr();
  const $ = Q.redMul(Z).redAdd(Q.redMul(this.a)).redAdd(Z);
  return $.redSqrt().redSqr().cmp($) === 0;
};
tt(ti, te.BasePoint);
tn.prototype.decodePoint = function (J, Z) {
  return this.point(toArray(J, Z), 1);
};
tn.prototype.point = function (J, Z) {
  return new ti(this, J, Z);
};
tn.prototype.pointFromJSON = function (J) {
  return ti.fromJSON(this, J);
};
ti.prototype.precompute = function () {};
ti.prototype._encode = function () {
  return this.getX().toArray("be", this.curve.p.byteLength());
};
ti.fromJSON = function (J, Z) {
  return new ti(J, Z[0], Z[1] || J.one);
};
ti.prototype.inspect = function () {
  if (this.isInfinity()) {
    return "<EC Point Infinity>";
  }
  return (
    "<EC Point x: " +
    this.x.fromRed().toString(16, 2) +
    " z: " +
    this.z.fromRed().toString(16, 2) +
    ">"
  );
};
ti.prototype.isInfinity = function () {
  return this.z.cmpn(0) === 0;
};
ti.prototype.dbl = function () {
  const J = this.x.redAdd(this.z).redSqr();
  const Z = this.x.redSub(this.z).redSqr();
  const Q = J.redSub(Z);
  const $ = J.redMul(Z);
  const tt = Q.redMul(Z.redAdd(this.curve.a24.redMul(Q)));
  return this.curve.point($, tt);
};
ti.prototype.add = function () {
  throw Error("Not supported on Montgomery curve");
};
ti.prototype.diffAdd = function (J, Z) {
  const Q = this.x.redAdd(this.z);
  const $ = this.x.redSub(this.z);
  const tt = J.x.redAdd(J.z);
  const te = J.x.redSub(J.z).redMul(Q);
  const tr = tt.redMul($);
  const tn = Z.z.redMul(te.redAdd(tr).redSqr());
  const ti = Z.x.redMul(te.redISub(tr).redSqr());
  return this.curve.point(tn, ti);
};
ti.prototype.mul = function (J) {
  for (
    var Z = J.clone(), Q = this, $ = this.curve.point(null, null), tt = [];
    Z.cmpn(0) !== 0;
    Z.iushrn(1)
  ) {
    tt.push(Z.andln(1));
  }
  for (let te = tt.length - 1; te >= 0; te--) {
    if (tt[te] === 0) {
      Q = Q.diffAdd($, this);
      $ = $.dbl();
    } else {
      $ = Q.diffAdd($, this);
      Q = Q.dbl();
    }
  }
  return $;
};
ti.prototype.mulAdd = function () {
  throw Error("Not supported on Montgomery curve");
};
ti.prototype.jumlAdd = function () {
  throw Error("Not supported on Montgomery curve");
};
ti.prototype.eq = function (J) {
  return this.getX().cmp(J.getX()) === 0;
};
ti.prototype.normalize = function () {
  this.x = this.x.redMul(this.z.redInvm());
  this.z = this.curve.one;
  return this;
};
ti.prototype.getX = function () {
  this.normalize();
  return this.x.fromRed();
};
