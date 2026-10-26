import i from "./module-cGB.js";
import { assert, encode, toArray } from "./module-M1_2.js";
const assert_1 = assert;
class a {
  constructor(t, e) {
    if (t instanceof a) {
      return t;
    }
    if (!this._importDER(t, e)) {
      assert_1(t.r && t.s, "Signature without r or s");
      this.r = new i(t.r, 16);
      this.s = new i(t.s, 16);
      if (t.recoveryParam === undefined) {
        this.recoveryParam = null;
      } else {
        this.recoveryParam = t.recoveryParam;
      }
    }
  }
  _importDER(t, e) {
    t = toArray(t, e);
    const r = new s();
    if (t[r.place++] !== 48) {
      return false;
    }
    const n = o(t, r);
    if (n === false || n + r.place !== t.length || t[r.place++] !== 2) {
      return false;
    }
    const a = o(t, r);
    if (a === false) {
      return false;
    }
    let h = t.slice(r.place, a + r.place);
    r.place += a;
    if (t[r.place++] !== 2) {
      return false;
    }
    const d = o(t, r);
    if (d === false || t.length !== d + r.place) {
      return false;
    }
    let c = t.slice(r.place, d + r.place);
    if (h[0] === 0) {
      if (!(128 & h[1])) {
        return false;
      } else {
        h = h.slice(1);
      }
    }
    if (c[0] === 0) {
      if (!(128 & c[1])) {
        return false;
      } else {
        c = c.slice(1);
      }
    }
    this.r = new i(h);
    this.s = new i(c);
    this.recoveryParam = null;
    return true;
  }
  toDER(t) {
    let e = this.r.toArray();
    let r = this.s.toArray();
    if (128 & e[0]) {
      e = [0].concat(e);
    }
    if (128 & r[0]) {
      r = [0].concat(r);
    }
    e = h(e);
    for (r = h(r); !r[0] && !(128 & r[1]);) {
      r = r.slice(1);
    }
    let i = [2];
    d(i, e.length);
    (i = i.concat(e)).push(2);
    d(i, r.length);
    const n = i.concat(r);
    let a = [48];
    d(a, n.length);
    a = a.concat(n);
    return encode(a, t);
  }
}
function s() {
  this.place = 0;
}
function o(t, e) {
  const r = t[e.place++];
  if (!(128 & r)) {
    return r;
  }
  const i = 15 & r;
  if (i === 0 || i > 4) {
    return false;
  }
  let f = 0;
  for (var n = 0, a = e.place; n < i; n++, a++) {
    f <<= 8;
    f |= t[a];
    f >>>= 0;
  }
  return !(f <= 127) && ((e.place = a), f);
}
function h(t) {
  for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) {
    e++;
  }
  if (e === 0) {
    return t;
  }
  return t.slice(e);
}
function d(t, e) {
  if (e < 128) {
    return void t.push(e);
  }
  let r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
  for (t.push(128 | r); --r;) {
    t.push((e >>> (r << 3)) & 255);
  }
  t.push(e);
}
export default a;
