import "./module-LHL.js";
let i;
i = require("./module-kV_2.js");
i.pad.Iso97971 = {
  pad: function (e, t) {
    e.concat(i.lib.WordArray.create([2147483648], 1));
    i.pad.ZeroPadding.pad(e, t);
  },
  unpad: function (e) {
    i.pad.ZeroPadding.unpad(e);
    e.sigBytes--;
  },
};
export default i.pad.Iso97971;
