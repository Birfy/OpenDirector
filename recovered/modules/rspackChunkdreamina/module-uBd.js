import "./module-LHL.js";
let i;
let s;
i = require("./module-kV_2.js");
i.mode.ECB =
  (((s = i.lib.BlockCipherMode.extend()).Encryptor = s.extend({
    processBlock: function (e, t) {
      this._cipher.encryptBlock(e, t);
    },
  })),
  (s.Decryptor = s.extend({
    processBlock: function (e, t) {
      this._cipher.decryptBlock(e, t);
    },
  })),
  s);
export default i.mode.ECB;
