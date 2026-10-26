import "./module-im3.js";
import "./module-KY.js";
let i;
let s;
let a;
let n;
let c;
let o;
let f;
i = require("./module-kV_2.js");
a = (s = i.x64).Word;
n = s.WordArray;
o = (c = i.algo).SHA512;
f = c.SHA384 = o.extend({
  _doReset: function () {
    this._hash = new n.init([
      new a.init(3418070365, 3238371032),
      new a.init(1654270250, 914150663),
      new a.init(2438529370, 812702999),
      new a.init(355462360, 4144912697),
      new a.init(1731405415, 4290775857),
      new a.init(2394180231, 1750603025),
      new a.init(3675008525, 1694076839),
      new a.init(1203062813, 3204075428),
    ]);
  },
  _doFinalize: function () {
    const e = o._doFinalize.call(this);
    e.sigBytes -= 16;
    return e;
  },
});
i.SHA384 = o._createHelper(f);
i.HmacSHA384 = o._createHmacHelper(f);
export default i.SHA384;
