import "./module-CgG.js";
let i;
let s;
let a;
let n;
let c;
i = require("./module-kV_2.js");
s = i.lib.WordArray;
n = (a = i.algo).SHA256;
c = a.SHA224 = n.extend({
  _doReset: function () {
    this._hash = new s.init([
      3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
      1694076839, 3204075428,
    ]);
  },
  _doFinalize: function () {
    const e = n._doFinalize.call(this);
    e.sigBytes -= 4;
    return e;
  },
});
i.SHA224 = n._createHelper(c);
i.HmacSHA224 = n._createHmacHelper(c);
export default i.SHA224;
