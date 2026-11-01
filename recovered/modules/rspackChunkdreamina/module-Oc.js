import { assert } from "./module-M1_2.js";
import f from "./module-cGB.js";
import n from "./module-Hs_2.js";
import a from "./module-dBJ.js";
const assert_1 = assert;
function o(t) {
  this.twisted = (0 | t.a) != 1;
  this.mOneA = this.twisted && (0 | t.a) == -1;
  this.extended = this.mOneA;
  a.call(this, "edwards", t);
  this.a = new f(t.a, 16).umod(this.red.m);
  this.a = this.a.toRed(this.red);
  this.c = new f(t.c, 16).toRed(this.red);
  this.c2 = this.c.redSqr();
  this.d = new f(t.d, 16).toRed(this.red);
  this.dd = this.d.redAdd(this.d);
  assert_1(!this.twisted || this.c.fromRed().cmpn(1) === 0);
  this.oneC = (0 | t.c) == 1;
}
function h(t, e, r, i, n) {
  a.BasePoint.call(this, t, "projective");
  if (e === null && r === null && i === null) {
    this.x = this.curve.zero;
    this.y = this.curve.one;
    this.z = this.curve.one;
    this.t = this.curve.zero;
    this.zOne = true;
  } else {
    this.x = new f(e, 16);
    this.y = new f(r, 16);
    this.z = i ? new f(i, 16) : this.curve.one;
    this.t = n && new f(n, 16);
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
n(o, a);
export default o;
o.prototype._mulA = function (t) {
  if (this.mOneA) {
    return t.redNeg();
  }
  return this.a.redMul(t);
};
o.prototype._mulC = function (t) {
  if (this.oneC) {
    return t;
  }
  return this.c.redMul(t);
};
o.prototype.jpoint = function (t, e, r, i) {
  return this.point(t, e, r, i);
};
o.prototype.pointFromX = function (t, e) {
  if (!(t = new f(t, 16)).red) {
    t = t.toRed(this.red);
  }
  const r = t.redSqr();
  const i = this.c2.redSub(this.a.redMul(r));
  const n = this.one.redSub(this.c2.redMul(this.d).redMul(r));
  const a = i.redMul(n.redInvm());
  let s = a.redSqrt();
  if (s.redSqr().redSub(a).cmp(this.zero) !== 0) {
    throw Error("invalid point");
  }
  const o = s.fromRed().isOdd();
  if ((e && !o) || (!e && o)) {
    s = s.redNeg();
  }
  return this.point(t, s);
};
o.prototype.pointFromY = function (t, e) {
  if (!(t = new f(t, 16)).red) {
    t = t.toRed(this.red);
  }
  const r = t.redSqr();
  const i = r.redSub(this.c2);
  const n = r.redMul(this.d).redMul(this.c2).redSub(this.a);
  const a = i.redMul(n.redInvm());
  if (a.cmp(this.zero) === 0) {
    if (!e) {
      return this.point(this.zero, t);
    } else {
      throw Error("invalid point");
    }
  }
  let s = a.redSqrt();
  if (s.redSqr().redSub(a).cmp(this.zero) !== 0) {
    throw Error("invalid point");
  }
  if (s.fromRed().isOdd() !== e) {
    s = s.redNeg();
  }
  return this.point(s, t);
};
o.prototype.validate = function (t) {
  if (t.isInfinity()) {
    return true;
  }
  t.normalize();
  const e = t.x.redSqr();
  const r = t.y.redSqr();
  const i = e.redMul(this.a).redAdd(r);
  const f = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
  return i.cmp(f) === 0;
};
n(h, a.BasePoint);
o.prototype.pointFromJSON = function (t) {
  return h.fromJSON(this, t);
};
o.prototype.point = function (t, e, r, i) {
  return new h(this, t, e, r, i);
};
h.fromJSON = function (t, e) {
  return new h(t, e[0], e[1], e[2]);
};
h.prototype.inspect = function () {
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
h.prototype.isInfinity = function () {
  return (
    this.x.cmpn(0) === 0 &&
    (this.y.cmp(this.z) === 0 || (this.zOne && this.y.cmp(this.curve.c) === 0))
  );
};
h.prototype._extDbl = function () {
  const t = this.x.redSqr();
  const e = this.y.redSqr();
  let r = this.z.redSqr();
  r = r.redIAdd(r);
  const i = this.curve._mulA(t);
  const f = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e);
  const n = i.redAdd(e);
  const a = n.redSub(r);
  const s = i.redSub(e);
  const o = f.redMul(a);
  const h = n.redMul(s);
  const d = f.redMul(s);
  const c = a.redMul(n);
  return this.curve.point(o, h, c, d);
};
h.prototype._projDbl = function () {
  let t;
  let e;
  let r;
  let i;
  let f;
  let n;
  const a = this.x.redAdd(this.y).redSqr();
  const s = this.x.redSqr();
  const o = this.y.redSqr();
  if (this.curve.twisted) {
    const h = (i = this.curve._mulA(s)).redAdd(o);
    if (this.zOne) {
      t = a.redSub(s).redSub(o).redMul(h.redSub(this.curve.two));
      e = h.redMul(i.redSub(o));
      r = h.redSqr().redSub(h).redSub(h);
    } else {
      f = this.z.redSqr();
      n = h.redSub(f).redISub(f);
      t = a.redSub(s).redISub(o).redMul(n);
      e = h.redMul(i.redSub(o));
      r = h.redMul(n);
    }
  } else {
    i = s.redAdd(o);
    f = this.curve._mulC(this.z).redSqr();
    n = i.redSub(f).redSub(f);
    t = this.curve._mulC(a.redISub(i)).redMul(n);
    e = this.curve._mulC(i).redMul(s.redISub(o));
    r = i.redMul(n);
  }
  return this.curve.point(t, e, r);
};
h.prototype.dbl = function () {
  if (this.isInfinity()) {
    return this;
  }
  if (this.curve.extended) {
    return this._extDbl();
  }
  return this._projDbl();
};
h.prototype._extAdd = function (t) {
  const e = this.y.redSub(this.x).redMul(t.y.redSub(t.x));
  const r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x));
  const i = this.t.redMul(this.curve.dd).redMul(t.t);
  const f = this.z.redMul(t.z.redAdd(t.z));
  const n = r.redSub(e);
  const a = f.redSub(i);
  const s = f.redAdd(i);
  const o = r.redAdd(e);
  const h = n.redMul(a);
  const d = s.redMul(o);
  const c = n.redMul(o);
  const u = a.redMul(s);
  return this.curve.point(h, d, u, c);
};
h.prototype._projAdd = function (t) {
  let e;
  let r;
  const i = this.z.redMul(t.z);
  const f = i.redSqr();
  const n = this.x.redMul(t.x);
  const a = this.y.redMul(t.y);
  const s = this.curve.d.redMul(n).redMul(a);
  const o = f.redSub(s);
  const h = f.redAdd(s);
  const d = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(n).redISub(a);
  const c = i.redMul(o).redMul(d);
  if (this.curve.twisted) {
    e = i.redMul(h).redMul(a.redSub(this.curve._mulA(n)));
    r = o.redMul(h);
  } else {
    e = i.redMul(h).redMul(a.redSub(n));
    r = this.curve._mulC(o).redMul(h);
  }
  return this.curve.point(c, e, r);
};
h.prototype.add = function (t) {
  if (this.isInfinity()) {
    return t;
  }
  if (t.isInfinity()) {
    return this;
  }
  if (this.curve.extended) {
    return this._extAdd(t);
  }
  return this._projAdd(t);
};
h.prototype.mul = function (t) {
  if (this._hasDoubles(t)) {
    return this.curve._fixedNafMul(this, t);
  }
  return this.curve._wnafMul(this, t);
};
h.prototype.mulAdd = function (t, e, r) {
  return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, false);
};
h.prototype.jmulAdd = function (t, e, r) {
  return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, true);
};
h.prototype.normalize = function () {
  if (this.zOne) {
    return this;
  }
  const t = this.z.redInvm();
  this.x = this.x.redMul(t);
  this.y = this.y.redMul(t);
  if (this.t) {
    this.t = this.t.redMul(t);
  }
  this.z = this.curve.one;
  this.zOne = true;
  return this;
};
h.prototype.neg = function () {
  return this.curve.point(
    this.x.redNeg(),
    this.y,
    this.z,
    this.t && this.t.redNeg(),
  );
};
h.prototype.getX = function () {
  this.normalize();
  return this.x.fromRed();
};
h.prototype.getY = function () {
  this.normalize();
  return this.y.fromRed();
};
h.prototype.eq = function (t) {
  return (
    this === t ||
    (this.getX().cmp(t.getX()) === 0 && this.getY().cmp(t.getY()) === 0)
  );
};
h.prototype.eqXToP = function (t) {
  const e = t.toRed(this.curve.red).redMul(this.z);
  if (this.x.cmp(e) === 0) {
    return true;
  }
  const r = t.clone();
  const i = this.curve.redN.redMul(this.z);
  while (true) {
    r.iadd(this.curve.n);
    if (r.cmp(this.curve.p) >= 0) {
      return false;
    }
    e.redIAdd(i);
    if (this.x.cmp(e) === 0) {
      return true;
    }
  }
};
h.prototype.toP = h.prototype.normalize;
h.prototype.mixedAdd = h.prototype.add;
