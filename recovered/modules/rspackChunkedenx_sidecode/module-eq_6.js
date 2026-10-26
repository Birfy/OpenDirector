import n from "./module-A_6.js";
import i from "./module-J_6.js";
import o from "./module-ma_6.js";
import s from "./module-FG_5.js";
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
