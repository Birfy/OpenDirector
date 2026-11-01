import n from "./module-A_9.js";
import i from "./module-J_9.js";
import o from "./module-ma_9.js";
import s from "./module-FG_8.js";
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
