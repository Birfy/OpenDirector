let i;
i = require("./module-kV_2.js");
((e) => {
  const i_lib = i.lib;
  const t_WordArray = i_lib.WordArray;
  const t_Hasher = i_lib.Hasher;
  const i_algo = i.algo;
  const n = [];
  for (let c = 0; c < 64; c++) {
    n[c] = (4294967296 * e.abs(e.sin(c + 1))) | 0;
  }
  const o = (i_algo.MD5 = t_Hasher.extend({
    _doReset: function () {
      this._hash = new t_WordArray.init([
        1732584193, 4023233417, 2562383102, 271733878,
      ]);
    },
    _doProcessBlock: function (e, t) {
      for (let r = 0; r < 16; r++) {
        const i = t + r;
        const s = e[i];
        e[i] =
          (((s << 8) | (s >>> 24)) & 16711935) |
          (((s << 24) | (s >>> 8)) & 4278255360);
      }
      const words = this._hash.words;
      const c = e[t + 0];
      const o = e[t + 1];
      const d = e[t + 2];
      const p = e[t + 3];
      const u = e[t + 4];
      const _ = e[t + 5];
      const y = e[t + 6];
      const v = e[t + 7];
      const g = e[t + 8];
      const b = e[t + 9];
      const k = e[t + 10];
      const B = e[t + 11];
      const w = e[t + 12];
      const m = e[t + 13];
      const S = e[t + 14];
      const C = e[t + 15];
      let H = words[0];
      let A = words[1];
      let D = words[2];
      let z = words[3];
      H = f(H, A, D, z, c, 7, n[0]);
      z = f(z, H, A, D, o, 12, n[1]);
      D = f(D, z, H, A, d, 17, n[2]);
      A = f(A, D, z, H, p, 22, n[3]);
      H = f(H, A, D, z, u, 7, n[4]);
      z = f(z, H, A, D, _, 12, n[5]);
      D = f(D, z, H, A, y, 17, n[6]);
      A = f(A, D, z, H, v, 22, n[7]);
      H = f(H, A, D, z, g, 7, n[8]);
      z = f(z, H, A, D, b, 12, n[9]);
      D = f(D, z, H, A, k, 17, n[10]);
      A = f(A, D, z, H, B, 22, n[11]);
      H = f(H, A, D, z, w, 7, n[12]);
      z = f(z, H, A, D, m, 12, n[13]);
      D = f(D, z, H, A, S, 17, n[14]);
      A = f(A, D, z, H, C, 22, n[15]);
      H = x(H, A, D, z, o, 5, n[16]);
      z = x(z, H, A, D, y, 9, n[17]);
      D = x(D, z, H, A, B, 14, n[18]);
      A = x(A, D, z, H, c, 20, n[19]);
      H = x(H, A, D, z, _, 5, n[20]);
      z = x(z, H, A, D, k, 9, n[21]);
      D = x(D, z, H, A, C, 14, n[22]);
      A = x(A, D, z, H, u, 20, n[23]);
      H = x(H, A, D, z, b, 5, n[24]);
      z = x(z, H, A, D, S, 9, n[25]);
      D = x(D, z, H, A, p, 14, n[26]);
      A = x(A, D, z, H, g, 20, n[27]);
      H = x(H, A, D, z, m, 5, n[28]);
      z = x(z, H, A, D, d, 9, n[29]);
      D = x(D, z, H, A, v, 14, n[30]);
      A = x(A, D, z, H, w, 20, n[31]);
      H = h(H, A, D, z, _, 4, n[32]);
      z = h(z, H, A, D, g, 11, n[33]);
      D = h(D, z, H, A, B, 16, n[34]);
      A = h(A, D, z, H, S, 23, n[35]);
      H = h(H, A, D, z, o, 4, n[36]);
      z = h(z, H, A, D, u, 11, n[37]);
      D = h(D, z, H, A, v, 16, n[38]);
      A = h(A, D, z, H, k, 23, n[39]);
      H = h(H, A, D, z, m, 4, n[40]);
      z = h(z, H, A, D, c, 11, n[41]);
      D = h(D, z, H, A, p, 16, n[42]);
      A = h(A, D, z, H, y, 23, n[43]);
      H = h(H, A, D, z, b, 4, n[44]);
      z = h(z, H, A, D, w, 11, n[45]);
      D = h(D, z, H, A, C, 16, n[46]);
      A = h(A, D, z, H, d, 23, n[47]);
      H = l(H, A, D, z, c, 6, n[48]);
      z = l(z, H, A, D, v, 10, n[49]);
      D = l(D, z, H, A, S, 15, n[50]);
      A = l(A, D, z, H, _, 21, n[51]);
      H = l(H, A, D, z, w, 6, n[52]);
      z = l(z, H, A, D, p, 10, n[53]);
      D = l(D, z, H, A, k, 15, n[54]);
      A = l(A, D, z, H, o, 21, n[55]);
      H = l(H, A, D, z, g, 6, n[56]);
      z = l(z, H, A, D, C, 10, n[57]);
      D = l(D, z, H, A, y, 15, n[58]);
      A = l(A, D, z, H, m, 21, n[59]);
      H = l(H, A, D, z, u, 6, n[60]);
      z = l(z, H, A, D, B, 10, n[61]);
      D = l(D, z, H, A, d, 15, n[62]);
      A = l(A, D, z, H, b, 21, n[63]);
      words[0] = (words[0] + H) | 0;
      words[1] = (words[1] + A) | 0;
      words[2] = (words[2] + D) | 0;
      words[3] = (words[3] + z) | 0;
    },
    _doFinalize: function () {
      const _data = this._data;
      const t_words = _data.words;
      const i = 8 * this._nDataBytes;
      const s = 8 * _data.sigBytes;
      t_words[s >>> 5] |= 128 << (24 - (s % 32));
      const a = e.floor(i / 4294967296);
      t_words[(((s + 64) >>> 9) << 4) + 15] =
        (((a << 8) | (a >>> 24)) & 16711935) |
        (((a << 24) | (a >>> 8)) & 4278255360);
      t_words[(((s + 64) >>> 9) << 4) + 14] =
        (((i << 8) | (i >>> 24)) & 16711935) |
        (((i << 24) | (i >>> 8)) & 4278255360);
      _data.sigBytes = (t_words.length + 1) * 4;
      this._process();
      const _hash = this._hash;
      const n_words = _hash.words;
      for (let o = 0; o < 4; o++) {
        const f = n_words[o];
        n_words[o] =
          (((f << 8) | (f >>> 24)) & 16711935) |
          (((f << 24) | (f >>> 8)) & 4278255360);
      }
      return _hash;
    },
    clone: function () {
      const e = t_Hasher.clone.call(this);
      e._hash = this._hash.clone();
      return e;
    },
  }));
  function f(e, t, r, i, s, a, n) {
    const c = e + ((t & r) | (~t & i)) + s + n;
    return ((c << a) | (c >>> (32 - a))) + t;
  }
  function x(e, t, r, i, s, a, n) {
    const c = e + ((t & i) | (r & ~i)) + s + n;
    return ((c << a) | (c >>> (32 - a))) + t;
  }
  function h(e, t, r, i, s, a, n) {
    const c = e + (t ^ r ^ i) + s + n;
    return ((c << a) | (c >>> (32 - a))) + t;
  }
  function l(e, t, r, i, s, a, n) {
    const c = e + (r ^ (t | ~i)) + s + n;
    return ((c << a) | (c >>> (32 - a))) + t;
  }
  i.MD5 = t_Hasher._createHelper(o);
  i.HmacMD5 = t_Hasher._createHmacHelper(o);
})(Math);
export default i.MD5;
