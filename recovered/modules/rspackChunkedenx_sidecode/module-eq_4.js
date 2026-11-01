import n from "./module-A_4.js";
import i from "./module-J_4.js";
import o from "./module-ma_4.js";
import s from "./module-FG_3.js";
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
