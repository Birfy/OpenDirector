import n from "./module-A.js";
import o from "./module-J.js";
import i from "./module-ma.js";
import a from "./module-FG.js";
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
