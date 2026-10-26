let i;
i = require("./module-kV_2.js");
((e) => {
  const i_lib = i.lib;
  const t_WordArray = i_lib.WordArray;
  const t_Hasher = i_lib.Hasher;
  const i_algo = i.algo;
  const n = t_WordArray.create([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6,
    15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13,
    11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9,
    7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
  ]);
  const c = t_WordArray.create([
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
    10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10,
    0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10,
    4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
  ]);
  const o = t_WordArray.create([
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9,
    7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13,
    6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9,
    15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
  ]);
  const f = t_WordArray.create([
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
    9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
    13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
    12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
  ]);
  const x = t_WordArray.create([
    0, 1518500249, 1859775393, 2400959708, 2840853838,
  ]);
  const h = t_WordArray.create([
    1352829926, 1548603684, 1836072691, 2053994217, 0,
  ]);
  const l = (i_algo.RIPEMD160 = t_Hasher.extend({
    _doReset: function () {
      this._hash = t_WordArray.create([
        1732584193, 4023233417, 2562383102, 271733878, 3285377520,
      ]);
    },
    _doProcessBlock: function (e, t) {
      let r;
      let i;
      let s;
      let a;
      let l;
      let p;
      let u;
      let _;
      let y;
      let v;
      let g;
      let b;
      let k;
      let B;
      let w;
      let m;
      let S;
      let C;
      let H;
      for (var A = 0; A < 16; A++) {
        const D = t + A;
        const z = e[D];
        e[D] =
          (((z << 8) | (z >>> 24)) & 16711935) |
          (((z << 24) | (z >>> 8)) & 4278255360);
      }
      const words = this._hash.words;
      const x_words = x.words;
      const h_words = h.words;
      const n_words = n.words;
      const c_words = c.words;
      const o_words = o.words;
      const f_words = f.words;
      B = y = words[0];
      w = v = words[1];
      m = g = words[2];
      S = b = words[3];
      C = k = words[4];
      for (var A = 0; A < 80; A += 1) {
        H = (y + e[t + n_words[A]]) | 0;
        if (A < 16) {
          H += (v ^ g ^ b) + x_words[0];
        } else if (A < 32) {
          H += (((r = v) & g) | (~r & b)) + x_words[1];
        } else if (A < 48) {
          H += ((v | ~g) ^ b) + x_words[2];
        } else if (A < 64) {
          H += ((i = v), (s = g), ((i & (a = b)) | (s & ~a)) + x_words[3]);
        } else {
          H += (v ^ (g | ~b)) + x_words[4];
        }
        H |= 0;
        H = ((H = d(H, o_words[A])) + k) | 0;
        y = k;
        k = b;
        b = d(g, 10);
        g = v;
        v = H;
        H = (B + e[t + c_words[A]]) | 0;
        if (A < 16) {
          H += (w ^ (m | ~S)) + h_words[0];
        } else if (A < 32) {
          H += ((l = w), (p = m), ((l & (u = S)) | (p & ~u)) + h_words[1]);
        } else if (A < 48) {
          H += ((w | ~m) ^ S) + h_words[2];
        } else if (A < 64) {
          H += (((_ = w) & m) | (~_ & S)) + h_words[3];
        } else {
          H += (w ^ m ^ S) + h_words[4];
        }
        H |= 0;
        H = ((H = d(H, f_words[A])) + C) | 0;
        B = C;
        C = S;
        S = d(m, 10);
        m = w;
        w = H;
      }
      H = (words[1] + g + S) | 0;
      words[1] = (words[2] + b + C) | 0;
      words[2] = (words[3] + k + B) | 0;
      words[3] = (words[4] + y + w) | 0;
      words[4] = (words[0] + v + m) | 0;
      words[0] = H;
    },
    _doFinalize: function () {
      const _data = this._data;
      const e_words = _data.words;
      const r = 8 * this._nDataBytes;
      const i = 8 * _data.sigBytes;
      e_words[i >>> 5] |= 128 << (24 - (i % 32));
      e_words[(((i + 64) >>> 9) << 4) + 14] =
        (((r << 8) | (r >>> 24)) & 16711935) |
        (((r << 24) | (r >>> 8)) & 4278255360);
      _data.sigBytes = (e_words.length + 1) * 4;
      this._process();
      const _hash = this._hash;
      const s_words = _hash.words;
      for (let n = 0; n < 5; n++) {
        const c = s_words[n];
        s_words[n] =
          (((c << 8) | (c >>> 24)) & 16711935) |
          (((c << 24) | (c >>> 8)) & 4278255360);
      }
      return _hash;
    },
    clone: function () {
      const e = t_Hasher.clone.call(this);
      e._hash = this._hash.clone();
      return e;
    },
  }));
  function d(e, t) {
    return (e << t) | (e >>> (32 - t));
  }
  i.RIPEMD160 = t_Hasher._createHelper(l);
  i.HmacRIPEMD160 = t_Hasher._createHmacHelper(l);
})(Math);
export default i.RIPEMD160;
