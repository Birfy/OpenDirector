import n from "./module-A_23.js";
import i from "./module-J_23.js";
import o from "./module-ma_23.js";
import s from "./module-FG_22.js";
const a = "ArrayBuffer";
const ArrayBuffer = o[a];
n(
  {
    global: true,
    constructor: true,
    forced: i[a] !== ArrayBuffer,
  },
  {
    ArrayBuffer,
  },
);
s(a);
