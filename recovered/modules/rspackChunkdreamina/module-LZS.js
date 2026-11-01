import "./module-LHL.js";
let i;
let s;
let a;
i = require("./module-kV_2.js");
i.mode.OFB =
  ((a = (s = i.lib.BlockCipherMode.extend()).Encryptor =
    s.extend({
      processBlock: function (e, t) {
        const _cipher = this._cipher;
        const r_blockSize = _cipher.blockSize;
        const _iv = this._iv;
        let _keystream = this._keystream;
        if (_iv) {
          _keystream = this._keystream = _iv.slice(0);
          this._iv = undefined;
        }
        _cipher.encryptBlock(_keystream, 0);
        for (let n = 0; n < r_blockSize; n++) {
          e[t + n] ^= _keystream[n];
        }
      },
    })),
  (s.Decryptor = a),
  s);
export default i.mode.OFB;
