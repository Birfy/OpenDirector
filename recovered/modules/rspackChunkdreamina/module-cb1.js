import "./module-LHL.js";
let i;
i = require("./module-kV_2.js");
i.mode.CTRGladman = (() => {
  const e = i.lib.BlockCipherMode.extend();
  function t(e) {
    if (((e >> 24) & 255) == 255) {
      let t = (e >> 16) & 255;
      let r = (e >> 8) & 255;
      let i = 255 & e;
      if (t === 255) {
        t = 0;
        if (r === 255) {
          r = 0;
          if (i === 255) {
            i = 0;
          } else {
            ++i;
          }
        } else {
          ++r;
        }
      } else {
        ++t;
      }
      e = 0 + (t << 16) + (r << 8) + i;
    } else {
      e += 16777216;
    }
    return e;
  }
  const r = (e.Encryptor = e.extend({
    processBlock: function (e, r) {
      let i;
      const _cipher = this._cipher;
      const s_blockSize = _cipher.blockSize;
      const _iv = this._iv;
      let _counter = this._counter;
      if (_iv) {
        _counter = this._counter = _iv.slice(0);
        this._iv = undefined;
      }
      if (((i = _counter)[0] = t(i[0])) === 0) {
        i[1] = t(i[1]);
      }
      const o = _counter.slice(0);
      _cipher.encryptBlock(o, 0);
      for (let f = 0; f < s_blockSize; f++) {
        e[r + f] ^= o[f];
      }
    },
  }));
  e.Decryptor = r;
  return e;
})();
export default i.mode.CTRGladman;
