let i;
let s;
let a;
export default void ((s = (i = require("./module-kV_2.js")).lib.Base),
(a = i.enc.Utf8),
(i.algo.HMAC = s.extend({
  init: function (e, t) {
    e = this._hasher = new e.init();
    if (typeof t === "string") {
      t = a.parse(t);
    }
    const e_blockSize = e.blockSize;
    const i = 4 * e_blockSize;
    if (t.sigBytes > i) {
      t = e.finalize(t);
    }
    t.clamp();
    const s = (this._oKey = t.clone());
    const n = (this._iKey = t.clone());
    const s_words = s.words;
    const n_words = n.words;
    for (let f = 0; f < e_blockSize; f++) {
      s_words[f] ^= 1549556828;
      n_words[f] ^= 909522486;
    }
    s.sigBytes = n.sigBytes = i;
    this.reset();
  },
  reset: function () {
    const _hasher = this._hasher;
    _hasher.reset();
    _hasher.update(this._iKey);
  },
  update: function (e) {
    this._hasher.update(e);
    return this;
  },
  finalize: function (e) {
    const _hasher = this._hasher;
    const r = _hasher.finalize(e);
    _hasher.reset();
    return _hasher.finalize(this._oKey.clone().concat(r));
  },
})));
