import { assert } from "./module-ty_2_2.js";
import tt from "./module-ai.js";
import te from "./module-ULy.js";
import tr from "./module-l8.js";
const assert_1 = assert;
function ti(J) {
  tr.call(this, "short", J);
  this.a = new tt(J.a, 16).toRed(this.red);
  this.b = new tt(J.b, 16).toRed(this.red);
  this.tinv = this.two.redInvm();
  this.zeroA = this.a.fromRed().cmpn(0) === 0;
  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
  this.endo = this._getEndomorphism(J);
  this._endoWnafT1 = [, , , ,];
  this._endoWnafT2 = [, , , ,];
}
function to(J, Z, Q, $) {
  tr.BasePoint.call(this, J, "affine");
  if (Z === null && Q === null) {
    this.x = null;
    this.y = null;
    this.inf = true;
  } else {
    this.x = new tt(Z, 16);
    this.y = new tt(Q, 16);
    if ($) {
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
function ta(J, Z, Q, $) {
  tr.BasePoint.call(this, J, "jacobian");
  if (Z === null && Q === null && $ === null) {
    this.x = this.curve.one;
    this.y = this.curve.one;
    this.z = new tt(0);
  } else {
    this.x = new tt(Z, 16);
    this.y = new tt(Q, 16);
    this.z = new tt($, 16);
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
te(ti, tr);
export default ti;
ti.prototype._getEndomorphism = function (J) {
  if (this.zeroA && this.g && this.n && this.p.modn(3) === 1) {
    if (J.beta) {
      beta = new tt(J.beta, 16).toRed(this.red);
    } else {
      var beta;
      var lambda;
      var basis;
      const te = this._getEndoRoots(this.p);
      beta = (beta = te[0].cmp(te[1]) < 0 ? te[0] : te[1]).toRed(this.red);
    }
    if (J.lambda) {
      lambda = new tt(J.lambda, 16);
    } else {
      const tr = this._getEndoRoots(this.n);
      if (this.g.mul(tr[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
        lambda = tr[0];
      } else {
        lambda = tr[1];
        assert_1(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
      }
    }
    basis = J.basis
      ? J.basis.map((J) => ({
          a: new tt(J.a, 16),
          b: new tt(J.b, 16),
        }))
      : this._getEndoBasis(lambda);
    return {
      beta,
      lambda,
      basis,
    };
  }
};
ti.prototype._getEndoRoots = function (J) {
  const Z = J === this.p ? this.red : tt.mont(J);
  const Q = new tt(2).toRed(Z).redInvm();
  const $ = Q.redNeg();
  const te = new tt(3).toRed(Z).redNeg().redSqrt().redMul(Q);
  return [$.redAdd(te).fromRed(), $.redSub(te).fromRed()];
};
ti.prototype._getEndoBasis = function (J) {
  let Z;
  let Q;
  let $;
  let te;
  let tr;
  let tn;
  let ti;
  let to;
  let ta;
  const ts = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
  for (
    let tf = J,
      tu = this.n.clone(),
      tc = new tt(1),
      th = new tt(0),
      td = new tt(0),
      tl = new tt(1),
      tp = 0;
    tf.cmpn(0) !== 0;
  ) {
    const tb = tu.div(tf);
    to = tu.sub(tb.mul(tf));
    ta = td.sub(tb.mul(tc));
    const tv = tl.sub(tb.mul(th));
    if (!$ && to.cmp(ts) < 0) {
      Z = ti.neg();
      Q = tc;
      $ = to.neg();
      te = ta;
    } else if ($ && ++tp == 2) {
      break;
    }
    ti = to;
    tu = tf;
    tf = to;
    td = tc;
    tc = ta;
    tl = th;
    th = tv;
  }
  tr = to.neg();
  tn = ta;
  const tg = $.sqr().add(te.sqr());
  if (tr.sqr().add(tn.sqr()).cmp(tg) >= 0) {
    tr = Z;
    tn = Q;
  }
  if ($.negative) {
    $ = $.neg();
    te = te.neg();
  }
  if (tr.negative) {
    tr = tr.neg();
    tn = tn.neg();
  }
  return [
    {
      a: $,
      b: te,
    },
    {
      a: tr,
      b: tn,
    },
  ];
};
ti.prototype._endoSplit = function (J) {
  const basis = this.endo.basis;
  const Q = basis[0];
  const $ = basis[1];
  const tt = $.b.mul(J).divRound(this.n);
  const te = Q.b.neg().mul(J).divRound(this.n);
  const tr = tt.mul(Q.a);
  const tn = te.mul($.a);
  const ti = tt.mul(Q.b);
  const to = te.mul($.b);
  return {
    k1: J.sub(tr).sub(tn),
    k2: ti.add(to).neg(),
  };
};
ti.prototype.pointFromX = function (J, Z) {
  if (!(J = new tt(J, 16)).red) {
    J = J.toRed(this.red);
  }
  const Q = J.redSqr().redMul(J).redIAdd(J.redMul(this.a)).redIAdd(this.b);
  let $ = Q.redSqrt();
  if ($.redSqr().redSub(Q).cmp(this.zero) !== 0) {
    throw Error("invalid point");
  }
  const te = $.fromRed().isOdd();
  if ((Z && !te) || (!Z && te)) {
    $ = $.redNeg();
  }
  return this.point(J, $);
};
ti.prototype.validate = function (J) {
  if (J.inf) {
    return true;
  }
  const Z = J.x;
  const Q = J.y;
  const $ = this.a.redMul(Z);
  const tt = Z.redSqr().redMul(Z).redIAdd($).redIAdd(this.b);
  return Q.redSqr().redISub(tt).cmpn(0) === 0;
};
ti.prototype._endoWnafMulAdd = function (J, Z, Q) {
  const _endoWnafT1 = this._endoWnafT1;
  const _endoWnafT2 = this._endoWnafT2;
  for (var te = 0; te < J.length; te++) {
    const tr = this._endoSplit(Z[te]);
    let tn = J[te];
    let ti = tn._getBeta();
    if (tr.k1.negative) {
      tr.k1.ineg();
      tn = tn.neg(true);
    }
    if (tr.k2.negative) {
      tr.k2.ineg();
      ti = ti.neg(true);
    }
    _endoWnafT1[2 * te] = tn;
    _endoWnafT1[2 * te + 1] = ti;
    _endoWnafT2[2 * te] = tr.k1;
    _endoWnafT2[2 * te + 1] = tr.k2;
  }
  const to = this._wnafMulAdd(1, _endoWnafT1, _endoWnafT2, 2 * te, Q);
  for (let ta = 0; ta < 2 * te; ta++) {
    _endoWnafT1[ta] = null;
    _endoWnafT2[ta] = null;
  }
  return to;
};
te(to, tr.BasePoint);
ti.prototype.point = function (J, Z, Q) {
  return new to(this, J, Z, Q);
};
ti.prototype.pointFromJSON = function (J, Z) {
  return to.fromJSON(this, J, Z);
};
to.prototype._getBeta = function () {
  if (this.curve.endo) {
    const J = this.precomputed;
    if (J && J.beta) {
      return J.beta;
    }
    const Z = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (J) {
      const Q = this.curve;
      const $ = function (J) {
        return Q.point(J.x.redMul(Q.endo.beta), J.y);
      };
      J.beta = Z;
      Z.precomputed = {
        beta: null,
        naf: J.naf && {
          wnd: J.naf.wnd,
          points: J.naf.points.map($),
        },
        doubles: J.doubles && {
          step: J.doubles.step,
          points: J.doubles.points.map($),
        },
      };
    }
    return Z;
  }
};
to.prototype.toJSON = function () {
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
to.fromJSON = function (J, Z, Q) {
  if (typeof Z === "string") {
    Z = JSON.parse(Z);
  }
  const $ = J.point(Z[0], Z[1], Q);
  if (!Z[2]) {
    return $;
  }
  function tt(Z) {
    return J.point(Z[0], Z[1], Q);
  }
  const te = Z[2];
  $.precomputed = {
    beta: null,
    doubles: te.doubles && {
      step: te.doubles.step,
      points: [$].concat(te.doubles.points.map(tt)),
    },
    naf: te.naf && {
      wnd: te.naf.wnd,
      points: [$].concat(te.naf.points.map(tt)),
    },
  };
  return $;
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
    ">"
  );
};
to.prototype.isInfinity = function () {
  return this.inf;
};
to.prototype.add = function (J) {
  if (this.inf) {
    return J;
  }
  if (J.inf) {
    return this;
  }
  if (this.eq(J)) {
    return this.dbl();
  }
  if (this.neg().eq(J) || this.x.cmp(J.x) === 0) {
    return this.curve.point(null, null);
  }
  let Z = this.y.redSub(J.y);
  if (Z.cmpn(0) !== 0) {
    Z = Z.redMul(this.x.redSub(J.x).redInvm());
  }
  const Q = Z.redSqr().redISub(this.x).redISub(J.x);
  const $ = Z.redMul(this.x.redSub(Q)).redISub(this.y);
  return this.curve.point(Q, $);
};
to.prototype.dbl = function () {
  if (this.inf) {
    return this;
  }
  const J = this.y.redAdd(this.y);
  if (J.cmpn(0) === 0) {
    return this.curve.point(null, null);
  }
  const Z = this.curve.a;
  const Q = this.x.redSqr();
  const $ = J.redInvm();
  const tt = Q.redAdd(Q).redIAdd(Q).redIAdd(Z).redMul($);
  const te = tt.redSqr().redISub(this.x.redAdd(this.x));
  const tr = tt.redMul(this.x.redSub(te)).redISub(this.y);
  return this.curve.point(te, tr);
};
to.prototype.getX = function () {
  return this.x.fromRed();
};
to.prototype.getY = function () {
  return this.y.fromRed();
};
to.prototype.mul = function (J) {
  J = new tt(J, 16);
  if (this.isInfinity()) {
    return this;
  }
  if (this._hasDoubles(J)) {
    return this.curve._fixedNafMul(this, J);
  }
  if (this.curve.endo) {
    return this.curve._endoWnafMulAdd([this], [J]);
  }
  return this.curve._wnafMul(this, J);
};
to.prototype.mulAdd = function (J, Z, Q) {
  const $ = [this, Z];
  const tt = [J, Q];
  if (this.curve.endo) {
    return this.curve._endoWnafMulAdd($, tt);
  }
  return this.curve._wnafMulAdd(1, $, tt, 2);
};
to.prototype.jmulAdd = function (J, Z, Q) {
  const $ = [this, Z];
  const tt = [J, Q];
  if (this.curve.endo) {
    return this.curve._endoWnafMulAdd($, tt, true);
  }
  return this.curve._wnafMulAdd(1, $, tt, 2, true);
};
to.prototype.eq = function (J) {
  return (
    this === J ||
    (this.inf === J.inf &&
      (this.inf || (this.x.cmp(J.x) === 0 && this.y.cmp(J.y) === 0)))
  );
};
to.prototype.neg = function (J) {
  if (this.inf) {
    return this;
  }
  const Z = this.curve.point(this.x, this.y.redNeg());
  if (J && this.precomputed) {
    const Q = this.precomputed;
    const $ = function (J) {
      return J.neg();
    };
    Z.precomputed = {
      naf: Q.naf && {
        wnd: Q.naf.wnd,
        points: Q.naf.points.map($),
      },
      doubles: Q.doubles && {
        step: Q.doubles.step,
        points: Q.doubles.points.map($),
      },
    };
  }
  return Z;
};
to.prototype.toJ = function () {
  if (this.inf) {
    return this.curve.jpoint(null, null, null);
  }
  return this.curve.jpoint(this.x, this.y, this.curve.one);
};
te(ta, tr.BasePoint);
ti.prototype.jpoint = function (J, Z, Q) {
  return new ta(this, J, Z, Q);
};
ta.prototype.toP = function () {
  if (this.isInfinity()) {
    return this.curve.point(null, null);
  }
  const J = this.z.redInvm();
  const Z = J.redSqr();
  const Q = this.x.redMul(Z);
  const $ = this.y.redMul(Z).redMul(J);
  return this.curve.point(Q, $);
};
ta.prototype.neg = function () {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
ta.prototype.add = function (J) {
  if (this.isInfinity()) {
    return J;
  }
  if (J.isInfinity()) {
    return this;
  }
  const Z = J.z.redSqr();
  const Q = this.z.redSqr();
  const $ = this.x.redMul(Z);
  const tt = J.x.redMul(Q);
  const te = this.y.redMul(Z.redMul(J.z));
  const tr = J.y.redMul(Q.redMul(this.z));
  const tn = $.redSub(tt);
  const ti = te.redSub(tr);
  if (tn.cmpn(0) === 0) {
    if (ti.cmpn(0) !== 0) {
      return this.curve.jpoint(null, null, null);
    } else {
      return this.dbl();
    }
  }
  const to = tn.redSqr();
  const ta = to.redMul(tn);
  const ts = $.redMul(to);
  const tf = ti.redSqr().redIAdd(ta).redISub(ts).redISub(ts);
  const tu = ti.redMul(ts.redISub(tf)).redISub(te.redMul(ta));
  const tc = this.z.redMul(J.z).redMul(tn);
  return this.curve.jpoint(tf, tu, tc);
};
ta.prototype.mixedAdd = function (J) {
  if (this.isInfinity()) {
    return J.toJ();
  }
  if (J.isInfinity()) {
    return this;
  }
  const Z = this.z.redSqr();
  const Q = this.x;
  const $ = J.x.redMul(Z);
  const tt = this.y;
  const te = J.y.redMul(Z).redMul(this.z);
  const tr = Q.redSub($);
  const tn = tt.redSub(te);
  if (tr.cmpn(0) === 0) {
    if (tn.cmpn(0) !== 0) {
      return this.curve.jpoint(null, null, null);
    } else {
      return this.dbl();
    }
  }
  const ti = tr.redSqr();
  const to = ti.redMul(tr);
  const ta = Q.redMul(ti);
  const ts = tn.redSqr().redIAdd(to).redISub(ta).redISub(ta);
  const tf = tn.redMul(ta.redISub(ts)).redISub(tt.redMul(to));
  const tu = this.z.redMul(tr);
  return this.curve.jpoint(ts, tf, tu);
};
ta.prototype.dblp = function (J) {
  if (J === 0 || this.isInfinity()) {
    return this;
  }
  if (!J) {
    return this.dbl();
  }
  if (this.curve.zeroA || this.curve.threeA) {
    var Z;
    let Q = this;
    for (Z = 0; Z < J; Z++) {
      Q = Q.dbl();
    }
    return Q;
  }
  const $ = this.curve.a;
  const tinv = this.curve.tinv;
  let te = this.x;
  const tr = this.y;
  let tn = this.z;
  let ti = tn.redSqr().redSqr();
  let to = tr.redAdd(tr);
  for (Z = 0; Z < J; Z++) {
    const ta = te.redSqr();
    const ts = to.redSqr();
    const tf = ts.redSqr();
    const tu = ta.redAdd(ta).redIAdd(ta).redIAdd($.redMul(ti));
    const tc = te.redMul(ts);
    const th = tu.redSqr().redISub(tc.redAdd(tc));
    const td = tc.redISub(th);
    let tl = tu.redMul(td);
    tl = tl.redIAdd(tl).redISub(tf);
    const tp = to.redMul(tn);
    if (Z + 1 < J) {
      ti = ti.redMul(tf);
    }
    te = th;
    tn = tp;
    to = tl;
  }
  return this.curve.jpoint(te, to.redMul(tinv), tn);
};
ta.prototype.dbl = function () {
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
ta.prototype._zeroDbl = function () {
  if (this.zOne) {
    var J;
    var Z;
    var Q;
    const $ = this.x.redSqr();
    const tt = this.y.redSqr();
    const te = tt.redSqr();
    let tr = this.x.redAdd(tt).redSqr().redISub($).redISub(te);
    tr = tr.redIAdd(tr);
    const tn = $.redAdd($).redIAdd($);
    const ti = tn.redSqr().redISub(tr).redISub(tr);
    let to = te.redIAdd(te);
    to = (to = to.redIAdd(to)).redIAdd(to);
    J = ti;
    Z = tn.redMul(tr.redISub(ti)).redISub(to);
    Q = this.y.redAdd(this.y);
  } else {
    const ta = this.x.redSqr();
    const ts = this.y.redSqr();
    const tf = ts.redSqr();
    let tu = this.x.redAdd(ts).redSqr().redISub(ta).redISub(tf);
    tu = tu.redIAdd(tu);
    const tc = ta.redAdd(ta).redIAdd(ta);
    const th = tc.redSqr();
    let td = tf.redIAdd(tf);
    td = (td = td.redIAdd(td)).redIAdd(td);
    J = th.redISub(tu).redISub(tu);
    Z = tc.redMul(tu.redISub(J)).redISub(td);
    Q = (Q = this.y.redMul(this.z)).redIAdd(Q);
  }
  return this.curve.jpoint(J, Z, Q);
};
ta.prototype._threeDbl = function () {
  if (this.zOne) {
    var J;
    var Z;
    var Q;
    const $ = this.x.redSqr();
    const tt = this.y.redSqr();
    const te = tt.redSqr();
    let tr = this.x.redAdd(tt).redSqr().redISub($).redISub(te);
    tr = tr.redIAdd(tr);
    const tn = $.redAdd($).redIAdd($).redIAdd(this.curve.a);
    const ti = tn.redSqr().redISub(tr).redISub(tr);
    J = ti;
    let to = te.redIAdd(te);
    to = (to = to.redIAdd(to)).redIAdd(to);
    Z = tn.redMul(tr.redISub(ti)).redISub(to);
    Q = this.y.redAdd(this.y);
  } else {
    const ta = this.z.redSqr();
    const ts = this.y.redSqr();
    const tf = this.x.redMul(ts);
    let tu = this.x.redSub(ta).redMul(this.x.redAdd(ta));
    tu = tu.redAdd(tu).redIAdd(tu);
    let tc = tf.redIAdd(tf);
    const th = (tc = tc.redIAdd(tc)).redAdd(tc);
    J = tu.redSqr().redISub(th);
    Q = this.y.redAdd(this.z).redSqr().redISub(ts).redISub(ta);
    let td = ts.redSqr();
    td = (td = (td = td.redIAdd(td)).redIAdd(td)).redIAdd(td);
    Z = tu.redMul(tc.redISub(J)).redISub(td);
  }
  return this.curve.jpoint(J, Z, Q);
};
ta.prototype._dbl = function () {
  const J = this.curve.a;
  const Z = this.x;
  const Q = this.y;
  const $ = this.z;
  const tt = $.redSqr().redSqr();
  const te = Z.redSqr();
  const tr = Q.redSqr();
  const tn = te.redAdd(te).redIAdd(te).redIAdd(J.redMul(tt));
  let ti = Z.redAdd(Z);
  const to = (ti = ti.redIAdd(ti)).redMul(tr);
  const ta = tn.redSqr().redISub(to.redAdd(to));
  const ts = to.redISub(ta);
  let tf = tr.redSqr();
  tf = (tf = (tf = tf.redIAdd(tf)).redIAdd(tf)).redIAdd(tf);
  const tu = tn.redMul(ts).redISub(tf);
  const tc = Q.redAdd(Q).redMul($);
  return this.curve.jpoint(ta, tu, tc);
};
ta.prototype.trpl = function () {
  if (!this.curve.zeroA) {
    return this.dbl().add(this);
  }
  const J = this.x.redSqr();
  const Z = this.y.redSqr();
  const Q = this.z.redSqr();
  const $ = Z.redSqr();
  const tt = J.redAdd(J).redIAdd(J);
  const te = tt.redSqr();
  let tr = this.x.redAdd(Z).redSqr().redISub(J).redISub($);
  const tn = (tr = (tr = (tr = tr.redIAdd(tr)).redAdd(tr).redIAdd(tr)).redISub(
    te,
  )).redSqr();
  let ti = $.redIAdd($);
  ti = (ti = (ti = ti.redIAdd(ti)).redIAdd(ti)).redIAdd(ti);
  const to = tt.redIAdd(tr).redSqr().redISub(te).redISub(tn).redISub(ti);
  let ta = Z.redMul(to);
  ta = (ta = ta.redIAdd(ta)).redIAdd(ta);
  let ts = this.x.redMul(tn).redISub(ta);
  ts = (ts = ts.redIAdd(ts)).redIAdd(ts);
  let tf = this.y.redMul(to.redMul(ti.redISub(to)).redISub(tr.redMul(tn)));
  tf = (tf = (tf = tf.redIAdd(tf)).redIAdd(tf)).redIAdd(tf);
  const tu = this.z.redAdd(tr).redSqr().redISub(Q).redISub(tn);
  return this.curve.jpoint(ts, tf, tu);
};
ta.prototype.mul = function (J, Z) {
  J = new tt(J, Z);
  return this.curve._wnafMul(this, J);
};
ta.prototype.eq = function (J) {
  if (J.type === "affine") {
    return this.eq(J.toJ());
  }
  if (this === J) {
    return true;
  }
  const Z = this.z.redSqr();
  const Q = J.z.redSqr();
  if (this.x.redMul(Q).redISub(J.x.redMul(Z)).cmpn(0) !== 0) {
    return false;
  }
  const $ = Z.redMul(this.z);
  const tt = Q.redMul(J.z);
  return this.y.redMul(tt).redISub(J.y.redMul($)).cmpn(0) === 0;
};
ta.prototype.eqXToP = function (J) {
  const Z = this.z.redSqr();
  const Q = J.toRed(this.curve.red).redMul(Z);
  if (this.x.cmp(Q) === 0) {
    return true;
  }
  const $ = J.clone();
  const tt = this.curve.redN.redMul(Z);
  while (true) {
    $.iadd(this.curve.n);
    if ($.cmp(this.curve.p) >= 0) {
      return false;
    }
    Q.redIAdd(tt);
    if (this.x.cmp(Q) === 0) {
      return true;
    }
  }
};
ta.prototype.inspect = function () {
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
ta.prototype.isInfinity = function () {
  return this.z.cmpn(0) === 0;
};
