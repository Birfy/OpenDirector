import "./module-GU.js";
import "./module-RC1.js";
import "./module-Ow2.js";
import "./module-LHL.js";
let i;
i = require("./module-kV_2.js");
(() => {
  const StreamCipher = i.lib.StreamCipher;
  const i_algo = i.algo;
  const r = [];
  const s = [];
  const a = [];
  const n = (i_algo.RabbitLegacy = StreamCipher.extend({
    _doReset: function () {
      const words = this._key.words;
      const t = this.cfg.iv;
      const r = (this._X = [
        words[0],
        (words[3] << 16) | (words[2] >>> 16),
        words[1],
        (words[0] << 16) | (words[3] >>> 16),
        words[2],
        (words[1] << 16) | (words[0] >>> 16),
        words[3],
        (words[2] << 16) | (words[1] >>> 16),
      ]);
      const i = (this._C = [
        (words[2] << 16) | (words[2] >>> 16),
        (4294901760 & words[0]) | (65535 & words[1]),
        (words[3] << 16) | (words[3] >>> 16),
        (4294901760 & words[1]) | (65535 & words[2]),
        (words[0] << 16) | (words[0] >>> 16),
        (4294901760 & words[2]) | (65535 & words[3]),
        (words[1] << 16) | (words[1] >>> 16),
        (4294901760 & words[3]) | (65535 & words[0]),
      ]);
      this._b = 0;
      for (var s = 0; s < 4; s++) {
        c.call(this);
      }
      for (var s = 0; s < 8; s++) {
        i[s] ^= r[(s + 4) & 7];
      }
      if (t) {
        const a = t.words;
        const n = a[0];
        const o = a[1];
        const f =
          (((n << 8) | (n >>> 24)) & 16711935) |
          (((n << 24) | (n >>> 8)) & 4278255360);
        const x =
          (((o << 8) | (o >>> 24)) & 16711935) |
          (((o << 24) | (o >>> 8)) & 4278255360);
        const h = (f >>> 16) | (4294901760 & x);
        const l = (x << 16) | (65535 & f);
        i[0] ^= f;
        i[1] ^= h;
        i[2] ^= x;
        i[3] ^= l;
        i[4] ^= f;
        i[5] ^= h;
        i[6] ^= x;
        i[7] ^= l;
        for (var s = 0; s < 4; s++) {
          c.call(this);
        }
      }
    },
    _doProcessBlock: function (e, t) {
      const i = this._X;
      c.call(this);
      r[0] = i[0] ^ (i[5] >>> 16) ^ (i[3] << 16);
      r[1] = i[2] ^ (i[7] >>> 16) ^ (i[5] << 16);
      r[2] = i[4] ^ (i[1] >>> 16) ^ (i[7] << 16);
      r[3] = i[6] ^ (i[3] >>> 16) ^ (i[1] << 16);
      for (let s = 0; s < 4; s++) {
        r[s] =
          (((r[s] << 8) | (r[s] >>> 24)) & 16711935) |
          (((r[s] << 24) | (r[s] >>> 8)) & 4278255360);
        e[t + s] ^= r[s];
      }
    },
    blockSize: 4,
    ivSize: 2,
  }));
  function c() {
    const e = this._X;
    const t = this._C;
    for (var r = 0; r < 8; r++) {
      s[r] = t[r];
    }
    t[0] = (t[0] + 1295307597 + this._b) | 0;
    t[1] = (t[1] + 3545052371 + +(t[0] >>> 0 < s[0] >>> 0)) | 0;
    t[2] = (t[2] + 886263092 + +(t[1] >>> 0 < s[1] >>> 0)) | 0;
    t[3] = (t[3] + 1295307597 + +(t[2] >>> 0 < s[2] >>> 0)) | 0;
    t[4] = (t[4] + 3545052371 + +(t[3] >>> 0 < s[3] >>> 0)) | 0;
    t[5] = (t[5] + 886263092 + +(t[4] >>> 0 < s[4] >>> 0)) | 0;
    t[6] = (t[6] + 1295307597 + +(t[5] >>> 0 < s[5] >>> 0)) | 0;
    t[7] = (t[7] + 3545052371 + +(t[6] >>> 0 < s[6] >>> 0)) | 0;
    this._b = +(t[7] >>> 0 < s[7] >>> 0);
    for (var r = 0; r < 8; r++) {
      const i = e[r] + t[r];
      const n = 65535 & i;
      const c = i >>> 16;
      const o = ((((n * n) >>> 17) + n * c) >>> 15) + c * c;
      const f = (((4294901760 & i) * i) | 0) + (((65535 & i) * i) | 0);
      a[r] = o ^ f;
    }
    e[0] =
      (a[0] + ((a[7] << 16) | (a[7] >>> 16)) + ((a[6] << 16) | (a[6] >>> 16))) |
      0;
    e[1] = (a[1] + ((a[0] << 8) | (a[0] >>> 24)) + a[7]) | 0;
    e[2] =
      (a[2] + ((a[1] << 16) | (a[1] >>> 16)) + ((a[0] << 16) | (a[0] >>> 16))) |
      0;
    e[3] = (a[3] + ((a[2] << 8) | (a[2] >>> 24)) + a[1]) | 0;
    e[4] =
      (a[4] + ((a[3] << 16) | (a[3] >>> 16)) + ((a[2] << 16) | (a[2] >>> 16))) |
      0;
    e[5] = (a[5] + ((a[4] << 8) | (a[4] >>> 24)) + a[3]) | 0;
    e[6] =
      (a[6] + ((a[5] << 16) | (a[5] >>> 16)) + ((a[4] << 16) | (a[4] >>> 16))) |
      0;
    e[7] = (a[7] + ((a[6] << 8) | (a[6] >>> 24)) + a[5]) | 0;
  }
  i.RabbitLegacy = StreamCipher._createHelper(n);
})();
export default i.RabbitLegacy;
