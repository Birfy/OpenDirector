import n from "./module-A_22.js";
import i from "./module-J_22.js";
import o from "./module-ma_22.js";
import s from "./module-FG_21.js";
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
