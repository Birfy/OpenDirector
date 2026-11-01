import "./module-LHL.js";
let i;
i = require("./module-kV_2.js");
i.pad.ZeroPadding = {
  pad: function (e, t) {
    const r = 4 * t;
    e.clamp();
    e.sigBytes += r - (e.sigBytes % r || r);
  },
  unpad: function (e) {
    const e_words = e.words;
    for (var r = e.sigBytes - 1, r = e.sigBytes - 1; r >= 0; r--) {
      if ((e_words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255) {
        e.sigBytes = r + 1;
        break;
      }
    }
  },
};
export default i.pad.ZeroPadding;
