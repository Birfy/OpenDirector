import "./module-LHL.js";
let i;
let s;
let a;
i = require("./module-kV_2.js");
i.mode.CTR =
  ((a = (s = i.lib.BlockCipherMode.extend()).Encryptor =
    s.extend({
      processBlock: function (e, t) {
        const _cipher = this._cipher;
        const r_blockSize = _cipher.blockSize;
        const _iv = this._iv;
        let _counter = this._counter;
        if (_iv) {
          _counter = this._counter = _iv.slice(0);
          this._iv = undefined;
        }
        const n = _counter.slice(0);
        _cipher.encryptBlock(n, 0);
        _counter[r_blockSize - 1] = (_counter[r_blockSize - 1] + 1) | 0;
        for (let c = 0; c < r_blockSize; c++) {
          e[t + c] ^= n[c];
        }
      },
    })),
  (s.Decryptor = a),
  s);
export default i.mode.CTR;
