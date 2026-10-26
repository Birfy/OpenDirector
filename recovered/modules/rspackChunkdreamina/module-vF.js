import "./module-LHL.js";
let i;
i = require("./module-kV_2.js");
i.pad.Iso10126 = {
  pad: function (e, t) {
    const r = 4 * t;
    const s = r - (e.sigBytes % r);
    e.concat(i.lib.WordArray.random(s - 1)).concat(
      i.lib.WordArray.create([s << 24], 1),
    );
  },
  unpad: function (e) {
    const t = 255 & e.words[(e.sigBytes - 1) >>> 2];
    e.sigBytes -= t;
  },
};
export default i.pad.Iso10126;
