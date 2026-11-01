import i from "./module-cGB.js";
import { assert, encode, getJSF, getNAF, toArray } from "./module-M1_2.js";
const getNAF_1 = getNAF;
const getJSF_1 = getJSF;
const assert_1 = assert;
function o(t, e) {
  this.type = t;
  this.p = new i(e.p, 16);
  this.red = e.prime ? i.red(e.prime) : i.mont(this.p);
  this.zero = new i(0).toRed(this.red);
  this.one = new i(1).toRed(this.red);
  this.two = new i(2).toRed(this.red);
  this.n = e.n && new i(e.n, 16);
  this.g = e.g && this.pointFromJSON(e.g, e.gRed);
  this._wnafT1 = [, , , ,];
  this._wnafT2 = [, , , ,];
  this._wnafT3 = [, , , ,];
  this._wnafT4 = [, , , ,];
  this._bitLength = this.n ? this.n.bitLength() : 0;
  const r = this.n && this.p.div(this.n);
  if (!r || r.cmpn(100) > 0) {
    this.redN = null;
  } else {
    this._maxwellTrick = true;
    this.redN = this.n.toRed(this.red);
  }
}
class h {
  constructor(t, e) {
    this.curve = t;
    this.type = e;
    this.precomputed = null;
  }
  eq() {
    throw Error("Not implemented");
  }
  validate() {
    return this.curve.validate(this);
  }
  encodeCompressed(t) {
    return this.encode(t, true);
  }
  _encode(t) {
    const e = this.curve.p.byteLength();
    const r = this.getX().toArray("be", e);
    if (t) {
      return [this.getY().isEven() ? 2 : 3].concat(r);
    }
    return [4].concat(r, this.getY().toArray("be", e));
  }
  encode(t, e) {
    return encode(this._encode(e), t);
  }
  precompute(t) {
    if (this.precomputed) {
      return this;
    }
    const e = {
      doubles: null,
      naf: null,
      beta: null,
    };
    e.naf = this._getNAFPoints(8);
    e.doubles = this._getDoubles(4, t);
    e.beta = this._getBeta();
    this.precomputed = e;
    return this;
  }
  _hasDoubles(t) {
    if (!this.precomputed) {
      return false;
    }
    const doubles = this.precomputed.doubles;
    return (
      !!doubles &&
      doubles.points.length >= Math.ceil((t.bitLength() + 1) / doubles.step)
    );
  }
  _getDoubles(step, e) {
    if (this.precomputed && this.precomputed.doubles) {
      return this.precomputed.doubles;
    }
    const r = [this];
    let i = this;
    for (let f = 0; f < e; f += step) {
      for (let n = 0; n < step; n++) {
        i = i.dbl();
      }
      r.push(i);
    }
    return {
      step,
      points: r,
    };
  }
  _getNAFPoints(wnd) {
    if (this.precomputed && this.precomputed.naf) {
      return this.precomputed.naf;
    }
    const e = [this];
    for (
      let r = (1 << wnd) - 1, i = r === 1 ? null : this.dbl(), f = 1;
      f < r;
      f++
    ) {
      e[f] = e[f - 1].add(i);
    }
    return {
      wnd,
      points: e,
    };
  }
  _getBeta() {
    return null;
  }
  dblp(t) {
    let e = this;
    for (let r = 0; r < t; r++) {
      e = e.dbl();
    }
    return e;
  }
}
export default o;
o.prototype.point = function () {
  throw Error("Not implemented");
};
o.prototype.validate = function () {
  throw Error("Not implemented");
};
o.prototype._fixedNafMul = function (t, e) {
  assert_1(t.precomputed);
  let r;
  let i;
  const f = t._getDoubles();
  const a = getNAF_1(e, 1, this._bitLength);
  let o = (1 << (f.step + 1)) - (f.step % 2 == 0 ? 2 : 1);
  o /= 3;
  const h = [];
  for (r = 0; r < a.length; r += f.step) {
    i = 0;
    for (let d = r + f.step - 1; d >= r; d--) {
      i = (i << 1) + a[d];
    }
    h.push(i);
  }
  let c = this.jpoint(null, null, null);
  let u = this.jpoint(null, null, null);
  for (let l = o; l > 0; l--) {
    for (r = 0; r < h.length; r++) {
      if ((i = h[r]) === l) {
        u = u.mixedAdd(f.points[r]);
      } else if (i === -l) {
        u = u.mixedAdd(f.points[r].neg());
      }
    }
    c = c.add(u);
  }
  return c.toP();
};
o.prototype._wnafMul = function (t, e) {
  let r = 4;
  const i = t._getNAFPoints(r);
  r = i.wnd;
  const i_points = i.points;
  const a = getNAF_1(e, r, this._bitLength);
  let o = this.jpoint(null, null, null);
  for (let h = a.length - 1; h >= 0; h--) {
    let d = 0;
    for (; h >= 0 && a[h] === 0; h--) {
      d++;
    }
    if (h >= 0) {
      d++;
    }
    o = o.dblp(d);
    if (h < 0) {
      break;
    }
    const c = a[h];
    assert_1(c !== 0);
    o =
      t.type === "affine"
        ? c > 0
          ? o.mixedAdd(i_points[(c - 1) >> 1])
          : o.mixedAdd(i_points[(-c - 1) >> 1].neg())
        : c > 0
          ? o.add(i_points[(c - 1) >> 1])
          : o.add(i_points[(-c - 1) >> 1].neg());
  }
  if (t.type === "affine") {
    return o.toP();
  }
  return o;
};
o.prototype._wnafMulAdd = function (t, e, r, i, f) {
  let s;
  let o;
  let h;
  const _wnafT1 = this._wnafT1;
  const _wnafT2 = this._wnafT2;
  const _wnafT3 = this._wnafT3;
  let l = 0;
  for (s = 0; s < i; s++) {
    const b = (h = e[s])._getNAFPoints(t);
    _wnafT1[s] = b.wnd;
    _wnafT2[s] = b.points;
  }
  for (s = i - 1; s >= 1; s -= 2) {
    const p = s - 1;
    const m = s;
    if (_wnafT1[p] !== 1 || _wnafT1[m] !== 1) {
      _wnafT3[p] = getNAF_1(r[p], _wnafT1[p], this._bitLength);
      _wnafT3[m] = getNAF_1(r[m], _wnafT1[m], this._bitLength);
      l = Math.max(_wnafT3[p].length, l);
      l = Math.max(_wnafT3[m].length, l);
      continue;
    }
    const v = [e[p], null, null, e[m]];
    if (e[p].y.cmp(e[m].y) === 0) {
      v[1] = e[p].add(e[m]);
      v[2] = e[p].toJ().mixedAdd(e[m].neg());
    } else if (e[p].y.cmp(e[m].y.redNeg()) === 0) {
      v[1] = e[p].toJ().mixedAdd(e[m]);
      v[2] = e[p].add(e[m].neg());
    } else {
      v[1] = e[p].toJ().mixedAdd(e[m]);
      v[2] = e[p].toJ().mixedAdd(e[m].neg());
    }
    const g = [-3, -1, -5, -7, 0, 7, 5, 1, 3];
    const y = getJSF_1(r[p], r[m]);
    l = Math.max(y[0].length, l);
    _wnafT3[p] = Array(l);
    _wnafT3[m] = Array(l);
    for (o = 0; o < l; o++) {
      const M = 0 | y[0][o];
      const w = 0 | y[1][o];
      _wnafT3[p][o] = g[(M + 1) * 3 + (w + 1)];
      _wnafT3[m][o] = 0;
      _wnafT2[p] = v;
    }
  }
  let _ = this.jpoint(null, null, null);
  const _wnafT4 = this._wnafT4;
  for (s = l; s >= 0; s--) {
    let S = 0;
    while (s >= 0) {
      let A = true;
      for (o = 0; o < i; o++) {
        _wnafT4[o] = 0 | _wnafT3[o][s];
        if (_wnafT4[o] !== 0) {
          A = false;
        }
      }
      if (!A) {
        break;
      }
      S++;
      s--;
    }
    if (s >= 0) {
      S++;
    }
    _ = _.dblp(S);
    if (s < 0) {
      break;
    }
    for (o = 0; o < i; o++) {
      const k = _wnafT4[o];
      if (k !== 0) {
        if (k > 0) {
          h = _wnafT2[o][(k - 1) >> 1];
        } else if (k < 0) {
          h = _wnafT2[o][(-k - 1) >> 1].neg();
        }
        _ = h.type === "affine" ? _.mixedAdd(h) : _.add(h);
      }
    }
  }
  for (s = 0; s < i; s++) {
    _wnafT2[s] = null;
  }
  if (f) {
    return _;
  }
  return _.toP();
};
o.BasePoint = h;
o.prototype.decodePoint = function (t, e) {
  t = toArray(t, e);
  const r = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 == 2 * r) {
    if (t[0] === 6) {
      assert_1(t[t.length - 1] % 2 == 0);
    } else if (t[0] === 7) {
      assert_1(t[t.length - 1] % 2 == 1);
    }
    return this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
  }
  if ((t[0] === 2 || t[0] === 3) && t.length - 1 === r) {
    return this.pointFromX(t.slice(1, 1 + r), t[0] === 3);
  }
  throw Error("Unknown point format");
};
