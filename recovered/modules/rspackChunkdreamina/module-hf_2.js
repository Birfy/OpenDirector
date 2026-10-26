import "./module-LHL.js";
let i;
i = require("./module-kV_2.js");
i.pad.AnsiX923 = {
  pad: function (e, t) {
    const e_sigBytes = e.sigBytes;
    const i = 4 * t;
    const s = i - (e_sigBytes % i);
    const a = e_sigBytes + s - 1;
    e.clamp();
    e.words[a >>> 2] |= s << (24 - (a % 4) * 8);
    e.sigBytes += s;
  },
  unpad: function (e) {
    const t = 255 & e.words[(e.sigBytes - 1) >>> 2];
    e.sigBytes -= t;
  },
};
export default i.pad.Ansix923;
