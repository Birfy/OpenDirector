import "./module-GU.js";
import "./module-RC1.js";
import "./module-Ow2.js";
import "./module-LHL.js";
let i;
i = require("./module-kV_2.js");
(() => {
  const StreamCipher = i.lib.StreamCipher;
  const i_algo = i.algo;
  const r = (i_algo.RC4 = StreamCipher.extend({
    _doReset: function () {
      const _key = this._key;
      const e_words = _key.words;
      const e_sigBytes = _key.sigBytes;
      const i = (this._S = []);
      for (var s = 0; s < 256; s++) {
        i[s] = s;
      }
      for (var s = 0, a = 0; s < 256; s++) {
        const n = s % e_sigBytes;
        const c = (e_words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
        a = (a + i[s] + c) % 256;
        const o = i[s];
        i[s] = i[a];
        i[a] = o;
      }
      this._i = this._j = 0;
    },
    _doProcessBlock: function (e, t) {
      e[t] ^= s.call(this);
    },
    keySize: 8,
    ivSize: 0,
  }));
  function s() {
    const e = this._S;
    let t = this._i;
    let r = this._j;
    let i = 0;
    for (let s = 0; s < 4; s++) {
      r = (r + e[(t = (t + 1) % 256)]) % 256;
      const a = e[t];
      e[t] = e[r];
      e[r] = a;
      i |= e[(e[t] + e[r]) % 256] << (24 - 8 * s);
    }
    this._i = t;
    this._j = r;
    return i;
  }
  i.RC4 = StreamCipher._createHelper(r);
  const a = (i_algo.RC4Drop = r.extend({
    cfg: r.cfg.extend({
      drop: 192,
    }),
    _doReset: function () {
      r._doReset.call(this);
      for (let e = this.cfg.drop; e > 0; e--) {
        s.call(this);
      }
    },
  }));
  i.RC4Drop = StreamCipher._createHelper(a);
})();
export default i.RC4;
