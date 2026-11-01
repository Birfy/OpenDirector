import "./module-GU.js";
import "./module-RC1.js";
import "./module-Ow2.js";
import "./module-LHL.js";
let i;
let s;
let a;
let n;
let c;
let o;
let f;
let x;
let h;
let l;
let d;
let p;
let u;
let _;
let y;
i = require("./module-kV_2.js");
s = i.lib.BlockCipher;
a = i.algo;
n = [];
c = [];
o = [];
f = [];
x = [];
h = [];
l = [];
d = [];
p = [];
u = [];
(() => {
  const e = [];
  for (var t = 0; t < 256; t++) {
    if (t < 128) {
      e[t] = t << 1;
    } else {
      e[t] = (t << 1) ^ 283;
    }
  }
  let r = 0;
  let i = 0;
  for (var t = 0; t < 256; t++) {
    let s = i ^ (i << 1) ^ (i << 2) ^ (i << 3) ^ (i << 4);
    s = (s >>> 8) ^ (255 & s) ^ 99;
    n[r] = s;
    c[s] = r;
    const a = e[r];
    const _ = e[a];
    const y = e[_];
    var v = (257 * e[s]) ^ (16843008 * s);
    o[r] = (v << 24) | (v >>> 8);
    f[r] = (v << 16) | (v >>> 16);
    x[r] = (v << 8) | (v >>> 24);
    h[r] = v;
    var v = (16843009 * y) ^ (65537 * _) ^ (257 * a) ^ (16843008 * r);
    l[s] = (v << 24) | (v >>> 8);
    d[s] = (v << 16) | (v >>> 16);
    p[s] = (v << 8) | (v >>> 24);
    u[s] = v;
    if (r) {
      r = a ^ e[e[e[y ^ a]]];
      i ^= e[e[i]];
    } else {
      i = 1;
      r = 1;
    }
  }
})();
_ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
y = a.AES = s.extend({
  _doReset: function () {
    if (!this._nRounds || this._keyPriorReset !== this._key) {
      var e;
      const t = (this._keyPriorReset = this._key);
      const r = t.words;
      const i = t.sigBytes / 4;
      for (
        var s = ((this._nRounds = i + 6) + 1) * 4,
          a = (this._keySchedule = []),
          c = 0;
        c < s;
        c++
      ) {
        if (c < i) {
          a[c] = r[c];
        } else {
          e = a[c - 1];
          if (c % i) {
            if (i > 6 && c % i == 4) {
              e =
                (n[e >>> 24] << 24) |
                (n[(e >>> 16) & 255] << 16) |
                (n[(e >>> 8) & 255] << 8) |
                n[255 & e];
            }
          } else {
            e =
              ((n[(e = (e << 8) | (e >>> 24)) >>> 24] << 24) |
                (n[(e >>> 16) & 255] << 16) |
                (n[(e >>> 8) & 255] << 8) |
                n[255 & e]) ^
              (_[(c / i) | 0] << 24);
          }
          a[c] = a[c - i] ^ e;
        }
      }
      const o = (this._invKeySchedule = []);
      for (let f = 0; f < s; f++) {
        var c = s - f;
        if (f % 4) var e = a[c];
        else {
          var e = a[c - 4];
        }
        if (f < 4 || c <= 4) {
          o[f] = e;
        } else {
          o[f] =
            l[n[e >>> 24]] ^
            d[n[(e >>> 16) & 255]] ^
            p[n[(e >>> 8) & 255]] ^
            u[n[255 & e]];
        }
      }
    }
  },
  encryptBlock: function (e, t) {
    this._doCryptBlock(e, t, this._keySchedule, o, f, x, h, n);
  },
  decryptBlock: function (e, t) {
    var r = e[t + 1];
    e[t + 1] = e[t + 3];
    e[t + 3] = r;
    this._doCryptBlock(e, t, this._invKeySchedule, l, d, p, u, c);
    var r = e[t + 1];
    e[t + 1] = e[t + 3];
    e[t + 3] = r;
  },
  _doCryptBlock: function (e, t, r, i, s, a, n, c) {
    for (
      var o = this._nRounds,
        f = e[t] ^ r[0],
        x = e[t + 1] ^ r[1],
        h = e[t + 2] ^ r[2],
        l = e[t + 3] ^ r[3],
        d = 4,
        p = 1;
      p < o;
      p++
    ) {
      var u =
        i[f >>> 24] ^
        s[(x >>> 16) & 255] ^
        a[(h >>> 8) & 255] ^
        n[255 & l] ^
        r[d++];
      var _ =
        i[x >>> 24] ^
        s[(h >>> 16) & 255] ^
        a[(l >>> 8) & 255] ^
        n[255 & f] ^
        r[d++];
      var y =
        i[h >>> 24] ^
        s[(l >>> 16) & 255] ^
        a[(f >>> 8) & 255] ^
        n[255 & x] ^
        r[d++];
      var v =
        i[l >>> 24] ^
        s[(f >>> 16) & 255] ^
        a[(x >>> 8) & 255] ^
        n[255 & h] ^
        r[d++];
      f = u;
      x = _;
      h = y;
      l = v;
    }
    var u =
      ((c[f >>> 24] << 24) |
        (c[(x >>> 16) & 255] << 16) |
        (c[(h >>> 8) & 255] << 8) |
        c[255 & l]) ^
      r[d++];
    var _ =
      ((c[x >>> 24] << 24) |
        (c[(h >>> 16) & 255] << 16) |
        (c[(l >>> 8) & 255] << 8) |
        c[255 & f]) ^
      r[d++];
    var y =
      ((c[h >>> 24] << 24) |
        (c[(l >>> 16) & 255] << 16) |
        (c[(f >>> 8) & 255] << 8) |
        c[255 & x]) ^
      r[d++];
    var v =
      ((c[l >>> 24] << 24) |
        (c[(f >>> 16) & 255] << 16) |
        (c[(x >>> 8) & 255] << 8) |
        c[255 & h]) ^
      r[d++];
    e[t] = u;
    e[t + 1] = _;
    e[t + 2] = y;
    e[t + 3] = v;
  },
  keySize: 8,
});
i.AES = s._createHelper(y);
export default i.AES;
