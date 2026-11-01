import i from "./module-cGB.js";
import f from "./module-Hs_2.js";
import n from "./module-dBJ.js";
import { toArray } from "./module-M1_2.js";
function s(t) {
  n.call(this, "mont", t);
  this.a = new i(t.a, 16).toRed(this.red);
  this.b = new i(t.b, 16).toRed(this.red);
  this.i4 = new i(4).toRed(this.red).redInvm();
  this.two = new i(2).toRed(this.red);
  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}
function o(t, e, r) {
  n.BasePoint.call(this, t, "projective");
  if (e === null && r === null) {
    this.x = this.curve.one;
    this.z = this.curve.zero;
  } else {
    this.x = new i(e, 16);
    this.z = new i(r, 16);
    if (!this.x.red) {
      this.x = this.x.toRed(this.curve.red);
    }
    if (!this.z.red) {
      this.z = this.z.toRed(this.curve.red);
    }
  }
}
f(s, n);
export default s;
s.prototype.validate = function (t) {
  const e = t.normalize().x;
  const r = e.redSqr();
  const i = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
  return i.redSqrt().redSqr().cmp(i) === 0;
};
f(o, n.BasePoint);
s.prototype.decodePoint = function (t, e) {
  return this.point(toArray(t, e), 1);
};
s.prototype.point = function (t, e) {
  return new o(this, t, e);
};
s.prototype.pointFromJSON = function (t) {
  return o.fromJSON(this, t);
};
o.prototype.precompute = function () {};
o.prototype._encode = function () {
  return this.getX().toArray("be", this.curve.p.byteLength());
};
o.fromJSON = function (t, e) {
  return new o(t, e[0], e[1] || t.one);
};
o.prototype.inspect = function () {
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
o.prototype.isInfinity = function () {
  return this.z.cmpn(0) === 0;
};
o.prototype.dbl = function () {
  const t = this.x.redAdd(this.z).redSqr();
  const e = this.x.redSub(this.z).redSqr();
  const r = t.redSub(e);
  const i = t.redMul(e);
  const f = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
  return this.curve.point(i, f);
};
o.prototype.add = function () {
  throw Error("Not supported on Montgomery curve");
};
o.prototype.diffAdd = function (t, e) {
  const r = this.x.redAdd(this.z);
  const i = this.x.redSub(this.z);
  const f = t.x.redAdd(t.z);
  const n = t.x.redSub(t.z).redMul(r);
  const a = f.redMul(i);
  const s = e.z.redMul(n.redAdd(a).redSqr());
  const o = e.x.redMul(n.redISub(a).redSqr());
  return this.curve.point(s, o);
};
o.prototype.mul = function (t) {
  for (
    var e = t.clone(), r = this, i = this.curve.point(null, null), f = [];
    e.cmpn(0) !== 0;
    e.iushrn(1)
  ) {
    f.push(e.andln(1));
  }
  for (let n = f.length - 1; n >= 0; n--) {
    if (f[n] === 0) {
      r = r.diffAdd(i, this);
      i = i.dbl();
    } else {
      i = r.diffAdd(i, this);
      r = r.dbl();
    }
  }
  return i;
};
o.prototype.mulAdd = function () {
  throw Error("Not supported on Montgomery curve");
};
o.prototype.jumlAdd = function () {
  throw Error("Not supported on Montgomery curve");
};
o.prototype.eq = function (t) {
  return this.getX().cmp(t.getX()) === 0;
};
o.prototype.normalize = function () {
  this.x = this.x.redMul(this.z.redInvm());
  this.z = this.curve.one;
  return this;
};
o.prototype.getX = function () {
  this.normalize();
  return this.x.fromRed();
};
