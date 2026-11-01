import n from "./module-g.js";
import o from "./module-u.js";
import i from "./module-PR_3.js";
import a from "./module-DP_2.js";
const s = "ArrayBuffer";
const ArrayBuffer = i[s];
n(
  {
    global: true,
    constructor: true,
    forced: o[s] !== ArrayBuffer,
  },
  {
    ArrayBuffer,
  },
);
a(s);
