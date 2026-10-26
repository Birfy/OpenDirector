import n from "./module-A_5.js";
import i from "./module-J_5.js";
import o from "./module-ma_5.js";
import s from "./module-FG_4.js";
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
