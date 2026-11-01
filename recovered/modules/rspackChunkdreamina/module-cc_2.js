let i;
let s;
let a;
let n;
let c;
let o;
let f;
a = (s = (i = require("./module-kV_2.js")).lib).WordArray;
n = s.Hasher;
c = i.algo;
o = [];
f = c.SHA1 = n.extend({
  _doReset: function () {
    this._hash = new a.init([
      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
    ]);
  },
  _doProcessBlock: function (e, t) {
    const words = this._hash.words;
    let i = words[0];
    let s = words[1];
    let a = words[2];
    let n = words[3];
    let c = words[4];
    for (let f = 0; f < 80; f++) {
      if (f < 16) {
        o[f] = 0 | e[t + f];
      } else {
        const x = o[f - 3] ^ o[f - 8] ^ o[f - 14] ^ o[f - 16];
        o[f] = (x << 1) | (x >>> 31);
      }
      let h = ((i << 5) | (i >>> 27)) + c + o[f];
      if (f < 20) {
        h += ((s & a) | (~s & n)) + 1518500249;
      } else if (f < 40) {
        h += (s ^ a ^ n) + 1859775393;
      } else if (f < 60) {
        h += ((s & a) | (s & n) | (a & n)) - 1894007588;
      } else {
        h += (s ^ a ^ n) - 899497514;
      }
      c = n;
      n = a;
      a = (s << 30) | (s >>> 2);
      s = i;
      i = h;
    }
    words[0] = (words[0] + i) | 0;
    words[1] = (words[1] + s) | 0;
    words[2] = (words[2] + a) | 0;
    words[3] = (words[3] + n) | 0;
    words[4] = (words[4] + c) | 0;
  },
  _doFinalize: function () {
    const _data = this._data;
    const e_words = _data.words;
    const r = 8 * this._nDataBytes;
    const i = 8 * _data.sigBytes;
    e_words[i >>> 5] |= 128 << (24 - (i % 32));
    e_words[(((i + 64) >>> 9) << 4) + 14] = Math.floor(r / 4294967296);
    e_words[(((i + 64) >>> 9) << 4) + 15] = r;
    _data.sigBytes = 4 * e_words.length;
    this._process();
    return this._hash;
  },
  clone: function () {
    const e = n.clone.call(this);
    e._hash = this._hash.clone();
    return e;
  },
});
i.SHA1 = n._createHelper(f);
i.HmacSHA1 = n._createHmacHelper(f);
export default i.SHA1;
