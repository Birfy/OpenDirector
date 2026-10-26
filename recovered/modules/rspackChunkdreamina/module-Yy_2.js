import "./module-LHL.js";
let i;
let s;
let a;
i = require("./module-kV_2.js");
s = i.lib.CipherParams;
a = i.enc.Hex;
i.format.Hex = {
  stringify: function (e) {
    return e.ciphertext.toString(a);
  },
  parse: function (e) {
    const ciphertext = a.parse(e);
    return s.create({
      ciphertext,
    });
  },
};
export default i.format.Hex;
