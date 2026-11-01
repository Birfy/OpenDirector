import $ from "./module-ai.js";
import { assert, encode, getJSF, getNAF, toArray } from "./module-ty_2_2.js";
const getNAF_1 = getNAF;
const getJSF_1 = getJSF;
const assert_1 = assert;
function ti(J, Z) {
  this.type = J;
  this.p = new $(Z.p, 16);
  this.red = Z.prime ? $.red(Z.prime) : $.mont(this.p);
  this.zero = new $(0).toRed(this.red);
  this.one = new $(1).toRed(this.red);
  this.two = new $(2).toRed(this.red);
  this.n = Z.n && new $(Z.n, 16);
  this.g = Z.g && this.pointFromJSON(Z.g, Z.gRed);
  this._wnafT1 = [, , , ,];
  this._wnafT2 = [, , , ,];
  this._wnafT3 = [, , , ,];
  this._wnafT4 = [, , , ,];
  this._bitLength = this.n ? this.n.bitLength() : 0;
  const Q = this.n && this.p.div(this.n);
  if (!Q || Q.cmpn(100) > 0) {
    this.redN = null;
  } else {
    this._maxwellTrick = true;
    this.redN = this.n.toRed(this.red);
  }
}
class to {
  constructor(J, Z) {
    this.curve = J;
    this.type = Z;
    this.precomputed = null;
  }
  eq() {
    throw Error("Not implemented");
  }
  validate() {
    return this.curve.validate(this);
  }
  encodeCompressed(J) {
    return this.encode(J, true);
  }
  _encode(J) {
    const Z = this.curve.p.byteLength();
    const Q = this.getX().toArray("be", Z);
    if (J) {
      return [this.getY().isEven() ? 2 : 3].concat(Q);
    }
    return [4].concat(Q, this.getY().toArray("be", Z));
  }
  encode(J, Z) {
    return encode(this._encode(Z), J);
  }
  precompute(J) {
    if (this.precomputed) {
      return this;
    }
    const Z = {
      doubles: null,
      naf: null,
      beta: null,
    };
    Z.naf = this._getNAFPoints(8);
    Z.doubles = this._getDoubles(4, J);
    Z.beta = this._getBeta();
    this.precomputed = Z;
    return this;
  }
  _hasDoubles(J) {
    if (!this.precomputed) {
      return false;
    }
    const doubles = this.precomputed.doubles;
    return (
      !!doubles &&
      doubles.points.length >= Math.ceil((J.bitLength() + 1) / doubles.step)
    );
  }
  _getDoubles(step, Z) {
    if (this.precomputed && this.precomputed.doubles) {
      return this.precomputed.doubles;
    }
    const Q = [this];
    let $ = this;
    for (let tt = 0; tt < Z; tt += step) {
      for (let te = 0; te < step; te++) {
        $ = $.dbl();
      }
      Q.push($);
    }
    return {
      step,
      points: Q,
    };
  }
  _getNAFPoints(wnd) {
    if (this.precomputed && this.precomputed.naf) {
      return this.precomputed.naf;
    }
    const Z = [this];
    for (
      let Q = (1 << wnd) - 1, $ = Q === 1 ? null : this.dbl(), tt = 1;
      tt < Q;
      tt++
    ) {
      Z[tt] = Z[tt - 1].add($);
    }
    return {
      wnd,
      points: Z,
    };
  }
  _getBeta() {
    return null;
  }
  dblp(J) {
    let Z = this;
    for (let Q = 0; Q < J; Q++) {
      Z = Z.dbl();
    }
    return Z;
  }
}
export default ti;
ti.prototype.point = function () {
  throw Error("Not implemented");
};
ti.prototype.validate = function () {
  throw Error("Not implemented");
};
ti.prototype._fixedNafMul = function (J, Z) {
  assert_1(J.precomputed);
  let Q;
  let $;
  const tt = J._getDoubles();
  const tr = getNAF_1(Z, 1, this._bitLength);
  let ti = (1 << (tt.step + 1)) - (tt.step % 2 == 0 ? 2 : 1);
  ti /= 3;
  const to = [];
  for (Q = 0; Q < tr.length; Q += tt.step) {
    $ = 0;
    for (let ta = Q + tt.step - 1; ta >= Q; ta--) {
      $ = ($ << 1) + tr[ta];
    }
    to.push($);
  }
  let ts = this.jpoint(null, null, null);
  let tf = this.jpoint(null, null, null);
  for (let tu = ti; tu > 0; tu--) {
    for (Q = 0; Q < to.length; Q++) {
      if (($ = to[Q]) === tu) {
        tf = tf.mixedAdd(tt.points[Q]);
      } else if ($ === -tu) {
        tf = tf.mixedAdd(tt.points[Q].neg());
      }
    }
    ts = ts.add(tf);
  }
  return ts.toP();
};
ti.prototype._wnafMul = function (J, Z) {
  let Q = 4;
  const $ = J._getNAFPoints(Q);
  Q = $.wnd;
  const $_points = $.points;
  const tr = getNAF_1(Z, Q, this._bitLength);
  let ti = this.jpoint(null, null, null);
  for (let to = tr.length - 1; to >= 0; to--) {
    let ta = 0;
    for (; to >= 0 && tr[to] === 0; to--) {
      ta++;
    }
    if (to >= 0) {
      ta++;
    }
    ti = ti.dblp(ta);
    if (to < 0) {
      break;
    }
    const ts = tr[to];
    assert_1(ts !== 0);
    ti =
      J.type === "affine"
        ? ts > 0
          ? ti.mixedAdd($_points[(ts - 1) >> 1])
          : ti.mixedAdd($_points[(-ts - 1) >> 1].neg())
        : ts > 0
          ? ti.add($_points[(ts - 1) >> 1])
          : ti.add($_points[(-ts - 1) >> 1].neg());
  }
  if (J.type === "affine") {
    return ti.toP();
  }
  return ti;
};
ti.prototype._wnafMulAdd = function (J, Z, Q, $, tt) {
  let tn;
  let ti;
  let to;
  const _wnafT1 = this._wnafT1;
  const _wnafT2 = this._wnafT2;
  const _wnafT3 = this._wnafT3;
  let tu = 0;
  for (tn = 0; tn < $; tn++) {
    const tc = (to = Z[tn])._getNAFPoints(J);
    _wnafT1[tn] = tc.wnd;
    _wnafT2[tn] = tc.points;
  }
  for (tn = $ - 1; tn >= 1; tn -= 2) {
    const th = tn - 1;
    const td = tn;
    if (_wnafT1[th] !== 1 || _wnafT1[td] !== 1) {
      _wnafT3[th] = getNAF_1(Q[th], _wnafT1[th], this._bitLength);
      _wnafT3[td] = getNAF_1(Q[td], _wnafT1[td], this._bitLength);
      tu = Math.max(_wnafT3[th].length, tu);
      tu = Math.max(_wnafT3[td].length, tu);
      continue;
    }
    const tl = [Z[th], null, null, Z[td]];
    if (Z[th].y.cmp(Z[td].y) === 0) {
      tl[1] = Z[th].add(Z[td]);
      tl[2] = Z[th].toJ().mixedAdd(Z[td].neg());
    } else if (Z[th].y.cmp(Z[td].y.redNeg()) === 0) {
      tl[1] = Z[th].toJ().mixedAdd(Z[td]);
      tl[2] = Z[th].add(Z[td].neg());
    } else {
      tl[1] = Z[th].toJ().mixedAdd(Z[td]);
      tl[2] = Z[th].toJ().mixedAdd(Z[td].neg());
    }
    const tp = [-3, -1, -5, -7, 0, 7, 5, 1, 3];
    const tb = getJSF_1(Q[th], Q[td]);
    tu = Math.max(tb[0].length, tu);
    _wnafT3[th] = Array(tu);
    _wnafT3[td] = Array(tu);
    for (ti = 0; ti < tu; ti++) {
      const tv = 0 | tb[0][ti];
      const tg = 0 | tb[1][ti];
      _wnafT3[th][ti] = tp[(tv + 1) * 3 + (tg + 1)];
      _wnafT3[td][ti] = 0;
      _wnafT2[th] = tl;
    }
  }
  let ty = this.jpoint(null, null, null);
  const _wnafT4 = this._wnafT4;
  for (tn = tu; tn >= 0; tn--) {
    let tw = 0;
    while (tn >= 0) {
      let tx = true;
      for (ti = 0; ti < $; ti++) {
        _wnafT4[ti] = 0 | _wnafT3[ti][tn];
        if (_wnafT4[ti] !== 0) {
          tx = false;
        }
      }
      if (!tx) {
        break;
      }
      tw++;
      tn--;
    }
    if (tn >= 0) {
      tw++;
    }
    ty = ty.dblp(tw);
    if (tn < 0) {
      break;
    }
    for (ti = 0; ti < $; ti++) {
      const t_ = _wnafT4[ti];
      if (t_ !== 0) {
        if (t_ > 0) {
          to = _wnafT2[ti][(t_ - 1) >> 1];
        } else if (t_ < 0) {
          to = _wnafT2[ti][(-t_ - 1) >> 1].neg();
        }
        ty = to.type === "affine" ? ty.mixedAdd(to) : ty.add(to);
      }
    }
  }
  for (tn = 0; tn < $; tn++) {
    _wnafT2[tn] = null;
  }
  if (tt) {
    return ty;
  }
  return ty.toP();
};
ti.BasePoint = to;
ti.prototype.decodePoint = function (J, Z) {
  J = toArray(J, Z);
  const Q = this.p.byteLength();
  if ((J[0] === 4 || J[0] === 6 || J[0] === 7) && J.length - 1 == 2 * Q) {
    if (J[0] === 6) {
      assert_1(J[J.length - 1] % 2 == 0);
    } else if (J[0] === 7) {
      assert_1(J[J.length - 1] % 2 == 1);
    }
    return this.point(J.slice(1, 1 + Q), J.slice(1 + Q, 1 + 2 * Q));
  }
  if ((J[0] === 2 || J[0] === 3) && J.length - 1 === Q) {
    return this.pointFromX(J.slice(1, 1 + Q), J[0] === 3);
  }
  throw Error("Unknown point format");
};
