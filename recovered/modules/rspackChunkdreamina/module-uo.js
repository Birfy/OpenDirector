import "./module-LHL.js";
let i;
i = require("./module-kV_2.js");
i.mode.CFB = (() => {
  const e = i.lib.BlockCipherMode.extend();
  function t(e, t, r, i) {
    let s;
    const _iv = this._iv;
    if (_iv) {
      s = _iv.slice(0);
      this._iv = undefined;
    } else {
      s = this._prevBlock;
    }
    i.encryptBlock(s, 0);
    for (let n = 0; n < r; n++) {
      e[t + n] ^= s[n];
    }
  }
  e.Encryptor = e.extend({
    processBlock: function (e, r) {
      const _cipher = this._cipher;
      const i_blockSize = _cipher.blockSize;
      t.call(this, e, r, i_blockSize, _cipher);
      this._prevBlock = e.slice(r, r + i_blockSize);
    },
  });
  e.Decryptor = e.extend({
    processBlock: function (e, r) {
      const _cipher = this._cipher;
      const i_blockSize = _cipher.blockSize;
      const a = e.slice(r, r + i_blockSize);
      t.call(this, e, r, i_blockSize, _cipher);
      this._prevBlock = a;
    },
  });
  return e;
})();
export default i.mode.CFB;
