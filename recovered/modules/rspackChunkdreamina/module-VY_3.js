import { assert } from "./module-M1_2.js";
import f from "./module-cGB.js";
import n from "./module-Hs_2.js";
import a from "./module-dBJ.js";
const assert_1 = assert;
function o(t) {
  a.call(this, "short", t);
  this.a = new f(t.a, 16).toRed(this.red);
  this.b = new f(t.b, 16).toRed(this.red);
  this.tinv = this.two.redInvm();
  this.zeroA = this.a.fromRed().cmpn(0) === 0;
  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
  this.endo = this._getEndomorphism(t);
  this._endoWnafT1 = [, , , ,];
  this._endoWnafT2 = [, , , ,];
}
function h(t, e, r, i) {
  a.BasePoint.call(this, t, "affine");
  if (e === null && r === null) {
    this.x = null;
    this.y = null;
    this.inf = true;
  } else {
    this.x = new f(e, 16);
    this.y = new f(r, 16);
    if (i) {
      this.x.forceRed(this.curve.red);
      this.y.forceRed(this.curve.red);
    }
    if (!this.x.red) {
      this.x = this.x.toRed(this.curve.red);
    }
    if (!this.y.red) {
      this.y = this.y.toRed(this.curve.red);
    }
    this.inf = false;
  }
}
function d(t, e, r, i) {
  a.BasePoint.call(this, t, "jacobian");
  if (e === null && r === null && i === null) {
    this.x = this.curve.one;
    this.y = this.curve.one;
    this.z = new f(0);
  } else {
    this.x = new f(e, 16);
    this.y = new f(r, 16);
    this.z = new f(i, 16);
  }
  if (!this.x.red) {
    this.x = this.x.toRed(this.curve.red);
  }
  if (!this.y.red) {
    this.y = this.y.toRed(this.curve.red);
  }
  if (!this.z.red) {
    this.z = this.z.toRed(this.curve.red);
  }
  this.zOne = this.z === this.curve.one;
}
n(o, a);
export default o;
o.prototype._getEndomorphism = function (t) {
  if (this.zeroA && this.g && this.n && this.p.modn(3) === 1) {
    if (t.beta) {
      beta = new f(t.beta, 16).toRed(this.red);
    } else {
      var beta;
      var lambda;
      var basis;
      const n = this._getEndoRoots(this.p);
      beta = (beta = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
    }
    if (t.lambda) {
      lambda = new f(t.lambda, 16);
    } else {
      const a = this._getEndoRoots(this.n);
      if (this.g.mul(a[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
        lambda = a[0];
      } else {
        lambda = a[1];
        assert_1(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
      }
    }
    basis = t.basis
      ? t.basis.map((t) => ({
          a: new f(t.a, 16),
          b: new f(t.b, 16),
        }))
      : this._getEndoBasis(lambda);
    return {
      beta,
      lambda,
      basis,
    };
  }
};
o.prototype._getEndoRoots = function (t) {
  const e = t === this.p ? this.red : f.mont(t);
  const r = new f(2).toRed(e).redInvm();
  const i = r.redNeg();
  const n = new f(3).toRed(e).redNeg().redSqrt().redMul(r);
  return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()];
};
o.prototype._getEndoBasis = function (t) {
  let e;
  let r;
  let a_1;
  let n;
  let a;
  let s;
  let o;
  let h;
  let d;
  const c = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
  for (
    let u = t,
      l = this.n.clone(),
      b = new f(1),
      p = new f(0),
      m = new f(0),
      v = new f(1),
      g = 0;
    u.cmpn(0) !== 0;
  ) {
    const y = l.div(u);
    h = l.sub(y.mul(u));
    d = m.sub(y.mul(b));
    const M = v.sub(y.mul(p));
    if (!a_1 && h.cmp(c) < 0) {
      e = o.neg();
      r = b;
      a_1 = h.neg();
      n = d;
    } else if (a_1 && ++g == 2) {
      break;
    }
    o = h;
    l = u;
    u = h;
    m = b;
    b = d;
    v = p;
    p = M;
  }
  a = h.neg();
  s = d;
  const w = a_1.sqr().add(n.sqr());
  if (a.sqr().add(s.sqr()).cmp(w) >= 0) {
    a = e;
    s = r;
  }
  if (a_1.negative) {
    a_1 = a_1.neg();
    n = n.neg();
  }
  if (a.negative) {
    a = a.neg();
    s = s.neg();
  }
  return [
    {
      a: a_1,
      b: n,
    },
    {
      a,
      b: s,
    },
  ];
};
o.prototype._endoSplit = function (t) {
  const basis = this.endo.basis;
  const r = basis[0];
  const i = basis[1];
  const f = i.b.mul(t).divRound(this.n);
  const n = r.b.neg().mul(t).divRound(this.n);
  const a = f.mul(r.a);
  const s = n.mul(i.a);
  const o = f.mul(r.b);
  const h = n.mul(i.b);
  return {
    k1: t.sub(a).sub(s),
    k2: o.add(h).neg(),
  };
};
o.prototype.pointFromX = function (t, e) {
  if (!(t = new f(t, 16)).red) {
    t = t.toRed(this.red);
  }
  const r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b);
  let i = r.redSqrt();
  if (i.redSqr().redSub(r).cmp(this.zero) !== 0) {
    throw Error("invalid point");
  }
  const n = i.fromRed().isOdd();
  if ((e && !n) || (!e && n)) {
    i = i.redNeg();
  }
  return this.point(t, i);
};
o.prototype.validate = function (t) {
  if (t.inf) {
    return true;
  }
  const e = t.x;
  const r = t.y;
  const i = this.a.redMul(e);
  const f = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
  return r.redSqr().redISub(f).cmpn(0) === 0;
};
o.prototype._endoWnafMulAdd = function (t, e, r) {
  const _endoWnafT1 = this._endoWnafT1;
  const _endoWnafT2 = this._endoWnafT2;
  for (var n = 0; n < t.length; n++) {
    const a = this._endoSplit(e[n]);
    let s = t[n];
    let o = s._getBeta();
    if (a.k1.negative) {
      a.k1.ineg();
      s = s.neg(true);
    }
    if (a.k2.negative) {
      a.k2.ineg();
      o = o.neg(true);
    }
    _endoWnafT1[2 * n] = s;
    _endoWnafT1[2 * n + 1] = o;
    _endoWnafT2[2 * n] = a.k1;
    _endoWnafT2[2 * n + 1] = a.k2;
  }
  const h = this._wnafMulAdd(1, _endoWnafT1, _endoWnafT2, 2 * n, r);
  for (let d = 0; d < 2 * n; d++) {
    _endoWnafT1[d] = null;
    _endoWnafT2[d] = null;
  }
  return h;
};
n(h, a.BasePoint);
o.prototype.point = function (t, e, r) {
  return new h(this, t, e, r);
};
o.prototype.pointFromJSON = function (t, e) {
  return h.fromJSON(this, t, e);
};
h.prototype._getBeta = function () {
  if (this.curve.endo) {
    const t = this.precomputed;
    if (t && t.beta) {
      return t.beta;
    }
    const e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      const r = this.curve;
      const i = function (t) {
        return r.point(t.x.redMul(r.endo.beta), t.y);
      };
      t.beta = e;
      e.precomputed = {
        beta: null,
        naf: t.naf && {
          wnd: t.naf.wnd,
          points: t.naf.points.map(i),
        },
        doubles: t.doubles && {
          step: t.doubles.step,
          points: t.doubles.points.map(i),
        },
      };
    }
    return e;
  }
};
h.prototype.toJSON = function () {
  if (this.precomputed) {
    return [
      this.x,
      this.y,
      this.precomputed && {
        doubles: this.precomputed.doubles && {
          step: this.precomputed.doubles.step,
          points: this.precomputed.doubles.points.slice(1),
        },
        naf: this.precomputed.naf && {
          wnd: this.precomputed.naf.wnd,
          points: this.precomputed.naf.points.slice(1),
        },
      },
    ];
  }
  return [this.x, this.y];
};
h.fromJSON = function (t, e, r) {
  if (typeof e === "string") {
    e = JSON.parse(e);
  }
  const i = t.point(e[0], e[1], r);
  if (!e[2]) {
    return i;
  }
  function f(e) {
    return t.point(e[0], e[1], r);
  }
  const n = e[2];
  i.precomputed = {
    beta: null,
    doubles: n.doubles && {
      step: n.doubles.step,
      points: [i].concat(n.doubles.points.map(f)),
    },
    naf: n.naf && {
      wnd: n.naf.wnd,
      points: [i].concat(n.naf.points.map(f)),
    },
  };
  return i;
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
    ">"
  );
};
h.prototype.isInfinity = function () {
  return this.inf;
};
h.prototype.add = function (t) {
  if (this.inf) {
    return t;
  }
  if (t.inf) {
    return this;
  }
  if (this.eq(t)) {
    return this.dbl();
  }
  if (this.neg().eq(t) || this.x.cmp(t.x) === 0) {
    return this.curve.point(null, null);
  }
  let e = this.y.redSub(t.y);
  if (e.cmpn(0) !== 0) {
    e = e.redMul(this.x.redSub(t.x).redInvm());
  }
  const r = e.redSqr().redISub(this.x).redISub(t.x);
  const i = e.redMul(this.x.redSub(r)).redISub(this.y);
  return this.curve.point(r, i);
};
h.prototype.dbl = function () {
  if (this.inf) {
    return this;
  }
  const t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0) {
    return this.curve.point(null, null);
  }
  const e = this.curve.a;
  const r = this.x.redSqr();
  const i = t.redInvm();
  const f = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i);
  const n = f.redSqr().redISub(this.x.redAdd(this.x));
  const a = f.redMul(this.x.redSub(n)).redISub(this.y);
  return this.curve.point(n, a);
};
h.prototype.getX = function () {
  return this.x.fromRed();
};
h.prototype.getY = function () {
  return this.y.fromRed();
};
h.prototype.mul = function (t) {
  t = new f(t, 16);
  if (this.isInfinity()) {
    return this;
  }
  if (this._hasDoubles(t)) {
    return this.curve._fixedNafMul(this, t);
  }
  if (this.curve.endo) {
    return this.curve._endoWnafMulAdd([this], [t]);
  }
  return this.curve._wnafMul(this, t);
};
h.prototype.mulAdd = function (t, e, r) {
  const i = [this, e];
  const f = [t, r];
  if (this.curve.endo) {
    return this.curve._endoWnafMulAdd(i, f);
  }
  return this.curve._wnafMulAdd(1, i, f, 2);
};
h.prototype.jmulAdd = function (t, e, r) {
  const i = [this, e];
  const f = [t, r];
  if (this.curve.endo) {
    return this.curve._endoWnafMulAdd(i, f, true);
  }
  return this.curve._wnafMulAdd(1, i, f, 2, true);
};
h.prototype.eq = function (t) {
  return (
    this === t ||
    (this.inf === t.inf &&
      (this.inf || (this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0)))
  );
};
h.prototype.neg = function (t) {
  if (this.inf) {
    return this;
  }
  const e = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    const r = this.precomputed;
    const i = function (t) {
      return t.neg();
    };
    e.precomputed = {
      naf: r.naf && {
        wnd: r.naf.wnd,
        points: r.naf.points.map(i),
      },
      doubles: r.doubles && {
        step: r.doubles.step,
        points: r.doubles.points.map(i),
      },
    };
  }
  return e;
};
h.prototype.toJ = function () {
  if (this.inf) {
    return this.curve.jpoint(null, null, null);
  }
  return this.curve.jpoint(this.x, this.y, this.curve.one);
};
n(d, a.BasePoint);
o.prototype.jpoint = function (t, e, r) {
  return new d(this, t, e, r);
};
d.prototype.toP = function () {
  if (this.isInfinity()) {
    return this.curve.point(null, null);
  }
  const t = this.z.redInvm();
  const e = t.redSqr();
  const r = this.x.redMul(e);
  const i = this.y.redMul(e).redMul(t);
  return this.curve.point(r, i);
};
d.prototype.neg = function () {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
d.prototype.add = function (t) {
  if (this.isInfinity()) {
    return t;
  }
  if (t.isInfinity()) {
    return this;
  }
  const e = t.z.redSqr();
  const r = this.z.redSqr();
  const i = this.x.redMul(e);
  const f = t.x.redMul(r);
  const n = this.y.redMul(e.redMul(t.z));
  const a = t.y.redMul(r.redMul(this.z));
  const s = i.redSub(f);
  const o = n.redSub(a);
  if (s.cmpn(0) === 0) {
    if (o.cmpn(0) !== 0) {
      return this.curve.jpoint(null, null, null);
    } else {
      return this.dbl();
    }
  }
  const h = s.redSqr();
  const d = h.redMul(s);
  const c = i.redMul(h);
  const u = o.redSqr().redIAdd(d).redISub(c).redISub(c);
  const l = o.redMul(c.redISub(u)).redISub(n.redMul(d));
  const b = this.z.redMul(t.z).redMul(s);
  return this.curve.jpoint(u, l, b);
};
d.prototype.mixedAdd = function (t) {
  if (this.isInfinity()) {
    return t.toJ();
  }
  if (t.isInfinity()) {
    return this;
  }
  const e = this.z.redSqr();
  const r = this.x;
  const i = t.x.redMul(e);
  const f = this.y;
  const n = t.y.redMul(e).redMul(this.z);
  const a = r.redSub(i);
  const s = f.redSub(n);
  if (a.cmpn(0) === 0) {
    if (s.cmpn(0) !== 0) {
      return this.curve.jpoint(null, null, null);
    } else {
      return this.dbl();
    }
  }
  const o = a.redSqr();
  const h = o.redMul(a);
  const d = r.redMul(o);
  const c = s.redSqr().redIAdd(h).redISub(d).redISub(d);
  const u = s.redMul(d.redISub(c)).redISub(f.redMul(h));
  const l = this.z.redMul(a);
  return this.curve.jpoint(c, u, l);
};
d.prototype.dblp = function (t) {
  if (t === 0 || this.isInfinity()) {
    return this;
  }
  if (!t) {
    return this.dbl();
  }
  if (this.curve.zeroA || this.curve.threeA) {
    var e;
    let r = this;
    for (e = 0; e < t; e++) {
      r = r.dbl();
    }
    return r;
  }
  const i = this.curve.a;
  const tinv = this.curve.tinv;
  let n = this.x;
  const a = this.y;
  let s = this.z;
  let o = s.redSqr().redSqr();
  let h = a.redAdd(a);
  for (e = 0; e < t; e++) {
    const d = n.redSqr();
    const c = h.redSqr();
    const u = c.redSqr();
    const l = d.redAdd(d).redIAdd(d).redIAdd(i.redMul(o));
    const b = n.redMul(c);
    const p = l.redSqr().redISub(b.redAdd(b));
    const m = b.redISub(p);
    let v = l.redMul(m);
    v = v.redIAdd(v).redISub(u);
    const g = h.redMul(s);
    if (e + 1 < t) {
      o = o.redMul(u);
    }
    n = p;
    s = g;
    h = v;
  }
  return this.curve.jpoint(n, h.redMul(tinv), s);
};
d.prototype.dbl = function () {
  if (this.isInfinity()) {
    return this;
  }
  if (this.curve.zeroA) {
    return this._zeroDbl();
  }
  if (this.curve.threeA) {
    return this._threeDbl();
  }
  return this._dbl();
};
d.prototype._zeroDbl = function () {
  if (this.zOne) {
    var t;
    var e;
    var r;
    const i = this.x.redSqr();
    const f = this.y.redSqr();
    const n = f.redSqr();
    let a = this.x.redAdd(f).redSqr().redISub(i).redISub(n);
    a = a.redIAdd(a);
    const s = i.redAdd(i).redIAdd(i);
    const o = s.redSqr().redISub(a).redISub(a);
    let h = n.redIAdd(n);
    h = (h = h.redIAdd(h)).redIAdd(h);
    t = o;
    e = s.redMul(a.redISub(o)).redISub(h);
    r = this.y.redAdd(this.y);
  } else {
    const d = this.x.redSqr();
    const c = this.y.redSqr();
    const u = c.redSqr();
    let l = this.x.redAdd(c).redSqr().redISub(d).redISub(u);
    l = l.redIAdd(l);
    const b = d.redAdd(d).redIAdd(d);
    const p = b.redSqr();
    let m = u.redIAdd(u);
    m = (m = m.redIAdd(m)).redIAdd(m);
    t = p.redISub(l).redISub(l);
    e = b.redMul(l.redISub(t)).redISub(m);
    r = (r = this.y.redMul(this.z)).redIAdd(r);
  }
  return this.curve.jpoint(t, e, r);
};
d.prototype._threeDbl = function () {
  if (this.zOne) {
    var t;
    var e;
    var r;
    const i = this.x.redSqr();
    const f = this.y.redSqr();
    const n = f.redSqr();
    let a = this.x.redAdd(f).redSqr().redISub(i).redISub(n);
    a = a.redIAdd(a);
    const s = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a);
    const o = s.redSqr().redISub(a).redISub(a);
    t = o;
    let h = n.redIAdd(n);
    h = (h = h.redIAdd(h)).redIAdd(h);
    e = s.redMul(a.redISub(o)).redISub(h);
    r = this.y.redAdd(this.y);
  } else {
    const d = this.z.redSqr();
    const c = this.y.redSqr();
    const u = this.x.redMul(c);
    let l = this.x.redSub(d).redMul(this.x.redAdd(d));
    l = l.redAdd(l).redIAdd(l);
    let b = u.redIAdd(u);
    const p = (b = b.redIAdd(b)).redAdd(b);
    t = l.redSqr().redISub(p);
    r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(d);
    let m = c.redSqr();
    m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m);
    e = l.redMul(b.redISub(t)).redISub(m);
  }
  return this.curve.jpoint(t, e, r);
};
d.prototype._dbl = function () {
  const t = this.curve.a;
  const e = this.x;
  const r = this.y;
  const i = this.z;
  const f = i.redSqr().redSqr();
  const n = e.redSqr();
  const a = r.redSqr();
  const s = n.redAdd(n).redIAdd(n).redIAdd(t.redMul(f));
  let o = e.redAdd(e);
  const h = (o = o.redIAdd(o)).redMul(a);
  const d = s.redSqr().redISub(h.redAdd(h));
  const c = h.redISub(d);
  let u = a.redSqr();
  u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
  const l = s.redMul(c).redISub(u);
  const b = r.redAdd(r).redMul(i);
  return this.curve.jpoint(d, l, b);
};
d.prototype.trpl = function () {
  if (!this.curve.zeroA) {
    return this.dbl().add(this);
  }
  const t = this.x.redSqr();
  const e = this.y.redSqr();
  const r = this.z.redSqr();
  const i = e.redSqr();
  const f = t.redAdd(t).redIAdd(t);
  const n = f.redSqr();
  let a = this.x.redAdd(e).redSqr().redISub(t).redISub(i);
  const s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(
    n,
  )).redSqr();
  let o = i.redIAdd(i);
  o = (o = (o = o.redIAdd(o)).redIAdd(o)).redIAdd(o);
  const h = f.redIAdd(a).redSqr().redISub(n).redISub(s).redISub(o);
  let d = e.redMul(h);
  d = (d = d.redIAdd(d)).redIAdd(d);
  let c = this.x.redMul(s).redISub(d);
  c = (c = c.redIAdd(c)).redIAdd(c);
  let u = this.y.redMul(h.redMul(o.redISub(h)).redISub(a.redMul(s)));
  u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
  const l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
  return this.curve.jpoint(c, u, l);
};
d.prototype.mul = function (t, e) {
  t = new f(t, e);
  return this.curve._wnafMul(this, t);
};
d.prototype.eq = function (t) {
  if (t.type === "affine") {
    return this.eq(t.toJ());
  }
  if (this === t) {
    return true;
  }
  const e = this.z.redSqr();
  const r = t.z.redSqr();
  if (this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0) !== 0) {
    return false;
  }
  const i = e.redMul(this.z);
  const f = r.redMul(t.z);
  return this.y.redMul(f).redISub(t.y.redMul(i)).cmpn(0) === 0;
};
d.prototype.eqXToP = function (t) {
  const e = this.z.redSqr();
  const r = t.toRed(this.curve.red).redMul(e);
  if (this.x.cmp(r) === 0) {
    return true;
  }
  const i = t.clone();
  const f = this.curve.redN.redMul(e);
  while (true) {
    i.iadd(this.curve.n);
    if (i.cmp(this.curve.p) >= 0) {
      return false;
    }
    r.redIAdd(f);
    if (this.x.cmp(r) === 0) {
      return true;
    }
  }
};
d.prototype.inspect = function () {
  if (this.isInfinity()) {
    return "<EC JPoint Infinity>";
  }
  return (
    "<EC JPoint x: " +
    this.x.toString(16, 2) +
    " y: " +
    this.y.toString(16, 2) +
    " z: " +
    this.z.toString(16, 2) +
    ">"
  );
};
d.prototype.isInfinity = function () {
  return this.z.cmpn(0) === 0;
};
