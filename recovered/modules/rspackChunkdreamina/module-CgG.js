let i;
i = require("./module-kV_2.js");
((e) => {
  const i_lib = i.lib;
  const t_WordArray = i_lib.WordArray;
  const t_Hasher = i_lib.Hasher;
  const i_algo = i.algo;
  const n = [];
  const c = [];
  function o(e) {
    return ((e - (0 | e)) * 4294967296) | 0;
  }
  let f = 2;
  for (let x = 0; x < 64;) {
    if (
      ((t) => {
        for (let r = e.sqrt(t), i = 2; i <= r; i++) {
          if (!(t % i)) {
            return false;
          }
        }
        return true;
      })(f)
    ) {
      if (x < 8) {
        n[x] = o(e.pow(f, 0.5));
      }
      c[x] = o(e.pow(f, 1 / 3));
      x++;
    }
    f++;
  }
  const h = [];
  const l = (i_algo.SHA256 = t_Hasher.extend({
    _doReset: function () {
      this._hash = new t_WordArray.init(n.slice(0));
    },
    _doProcessBlock: function (e, t) {
      const words = this._hash.words;
      let i = words[0];
      let s = words[1];
      let a = words[2];
      let n = words[3];
      let o = words[4];
      let f = words[5];
      let x = words[6];
      let l = words[7];
      for (let d = 0; d < 64; d++) {
        if (d < 16) {
          h[d] = 0 | e[t + d];
        } else {
          const p = h[d - 15];
          const u =
            ((p << 25) | (p >>> 7)) ^ ((p << 14) | (p >>> 18)) ^ (p >>> 3);
          const _ = h[d - 2];
          const y =
            ((_ << 15) | (_ >>> 17)) ^ ((_ << 13) | (_ >>> 19)) ^ (_ >>> 10);
          h[d] = u + h[d - 7] + y + h[d - 16];
        }
        const v = (o & f) ^ (~o & x);
        const g = (i & s) ^ (i & a) ^ (s & a);
        const b =
          ((i << 30) | (i >>> 2)) ^
          ((i << 19) | (i >>> 13)) ^
          ((i << 10) | (i >>> 22));
        const k =
          l +
          (((o << 26) | (o >>> 6)) ^
            ((o << 21) | (o >>> 11)) ^
            ((o << 7) | (o >>> 25))) +
          v +
          c[d] +
          h[d];
        const B = b + g;
        l = x;
        x = f;
        f = o;
        o = (n + k) | 0;
        n = a;
        a = s;
        s = i;
        i = (k + B) | 0;
      }
      words[0] = (words[0] + i) | 0;
      words[1] = (words[1] + s) | 0;
      words[2] = (words[2] + a) | 0;
      words[3] = (words[3] + n) | 0;
      words[4] = (words[4] + o) | 0;
      words[5] = (words[5] + f) | 0;
      words[6] = (words[6] + x) | 0;
      words[7] = (words[7] + l) | 0;
    },
    _doFinalize: function () {
      const _data = this._data;
      const t_words = _data.words;
      const i = 8 * this._nDataBytes;
      const s = 8 * _data.sigBytes;
      t_words[s >>> 5] |= 128 << (24 - (s % 32));
      t_words[(((s + 64) >>> 9) << 4) + 14] = e.floor(i / 4294967296);
      t_words[(((s + 64) >>> 9) << 4) + 15] = i;
      _data.sigBytes = 4 * t_words.length;
      this._process();
      return this._hash;
    },
    clone: function () {
      const e = t_Hasher.clone.call(this);
      e._hash = this._hash.clone();
      return e;
    },
  }));
  i.SHA256 = t_Hasher._createHelper(l);
  i.HmacSHA256 = t_Hasher._createHmacHelper(l);
})(Math);
export default i.SHA256;
