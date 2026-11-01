import n from "./module-A_3.js";
import i from "./module-J_3.js";
import o from "./module-ma_3.js";
import s from "./module-FG_2.js";
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
