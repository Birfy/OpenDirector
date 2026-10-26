import { vf } from "./module-tqk.js";
let s = [];
let a = [];
let n = [];
let c = [];
let o = [];
let f = [];
let x = [];
let h = [];
let l = [];
let d = [];
let p = [];
for (let e = 0; e < 256; e += 1) {
  if (e < 128) {
    p[e] = e << 1;
  } else {
    p[e] = (e << 1) ^ 283;
  }
}
let u = 0;
let _ = 0;
for (let e = 0; e < 256; e += 1) {
  let e = _ ^ (_ << 1) ^ (_ << 2) ^ (_ << 3) ^ (_ << 4);
  e = (e >>> 8) ^ (255 & e) ^ 99;
  s[u] = e;
  a[e] = u;
  let t = p[u];
  let r = p[t];
  let i = p[r];
  let y = (257 * p[e]) ^ (16843008 * e);
  n[u] = (y << 24) | (y >>> 8);
  c[u] = (y << 16) | (y >>> 16);
  o[u] = (y << 8) | (y >>> 24);
  f[u] = y;
  y = (16843009 * i) ^ (65537 * r) ^ (257 * t) ^ (16843008 * u);
  x[e] = (y << 24) | (y >>> 8);
  h[e] = (y << 16) | (y >>> 16);
  l[e] = (y << 8) | (y >>> 24);
  d[e] = y;
  if (u) {
    u = t ^ p[p[p[i ^ t]]];
    _ ^= p[p[_]];
  } else {
    _ = 1;
    u = 1;
  }
}
let y = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
class v extends vf {
  _doReset() {
    let e;
    if (this._nRounds && this._keyPriorReset === this._key) {
      return;
    }
    this._keyPriorReset = this._key;
    let _keyPriorReset = this._keyPriorReset;
    let t_words = _keyPriorReset.words;
    let i = _keyPriorReset.sigBytes / 4;
    this._nRounds = i + 6;
    let a = (this._nRounds + 1) * 4;
    this._keySchedule = [];
    let _keySchedule = this._keySchedule;
    for (let t = 0; t < a; t += 1) {
      if (t < i) {
        _keySchedule[t] = t_words[t];
      } else {
        e = _keySchedule[t - 1];
        if (t % i) {
          if (i > 6 && t % i == 4) {
            e =
              (s[e >>> 24] << 24) |
              (s[(e >>> 16) & 255] << 16) |
              (s[(e >>> 8) & 255] << 8) |
              s[255 & e];
          }
        } else {
          e =
            ((s[(e = (e << 8) | (e >>> 24)) >>> 24] << 24) |
              (s[(e >>> 16) & 255] << 16) |
              (s[(e >>> 8) & 255] << 8) |
              s[255 & e]) ^
            (y[(t / i) | 0] << 24);
        }
        _keySchedule[t] = _keySchedule[t - i] ^ e;
      }
    }
    this._invKeySchedule = [];
    let _invKeySchedule = this._invKeySchedule;
    for (let t = 0; t < a; t += 1) {
      let r = a - t;
      e = t % 4 ? _keySchedule[r] : _keySchedule[r - 4];
      if (t < 4 || r <= 4) {
        _invKeySchedule[t] = e;
      } else {
        _invKeySchedule[t] =
          x[s[e >>> 24]] ^
          h[s[(e >>> 16) & 255]] ^
          l[s[(e >>> 8) & 255]] ^
          d[s[255 & e]];
      }
    }
  }
  encryptBlock(e, t) {
    this._doCryptBlock(e, t, this._keySchedule, n, c, o, f, s);
  }
  decryptBlock(e, t) {
    let r = e[t + 1];
    e[t + 1] = e[t + 3];
    e[t + 3] = r;
    this._doCryptBlock(e, t, this._invKeySchedule, x, h, l, d, a);
    r = e[t + 1];
    e[t + 1] = e[t + 3];
    e[t + 3] = r;
  }
  _doCryptBlock(e, t, r, i, s, a, n, c) {
    let _nRounds = this._nRounds;
    let f = e[t] ^ r[0];
    let x = e[t + 1] ^ r[1];
    let h = e[t + 2] ^ r[2];
    let l = e[t + 3] ^ r[3];
    let d = 4;
    for (let e = 1; e < _nRounds; e += 1) {
      let e =
        i[f >>> 24] ^
        s[(x >>> 16) & 255] ^
        a[(h >>> 8) & 255] ^
        n[255 & l] ^
        r[d];
      d += 1;
      let t =
        i[x >>> 24] ^
        s[(h >>> 16) & 255] ^
        a[(l >>> 8) & 255] ^
        n[255 & f] ^
        r[d];
      d += 1;
      let c =
        i[h >>> 24] ^
        s[(l >>> 16) & 255] ^
        a[(f >>> 8) & 255] ^
        n[255 & x] ^
        r[d];
      d += 1;
      let o =
        i[l >>> 24] ^
        s[(f >>> 16) & 255] ^
        a[(x >>> 8) & 255] ^
        n[255 & h] ^
        r[d];
      d += 1;
      f = e;
      x = t;
      h = c;
      l = o;
    }
    let p =
      ((c[f >>> 24] << 24) |
        (c[(x >>> 16) & 255] << 16) |
        (c[(h >>> 8) & 255] << 8) |
        c[255 & l]) ^
      r[d];
    d += 1;
    let u =
      ((c[x >>> 24] << 24) |
        (c[(h >>> 16) & 255] << 16) |
        (c[(l >>> 8) & 255] << 8) |
        c[255 & f]) ^
      r[d];
    d += 1;
    let _ =
      ((c[h >>> 24] << 24) |
        (c[(l >>> 16) & 255] << 16) |
        (c[(f >>> 8) & 255] << 8) |
        c[255 & x]) ^
      r[d];
    d += 1;
    let y =
      ((c[l >>> 24] << 24) |
        (c[(f >>> 16) & 255] << 16) |
        (c[(x >>> 8) & 255] << 8) |
        c[255 & h]) ^
      r[d];
    d += 1;
    e[t] = p;
    e[t + 1] = u;
    e[t + 2] = _;
    e[t + 3] = y;
  }
}
v.keySize = 8;
let g = vf._createHelper(v);
export { g as c };
