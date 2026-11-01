import n from "./module-A_10.js";
import o from "./module-J_10.js";
import i from "./module-ma_10.js";
import a from "./module-FG_9.js";
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
