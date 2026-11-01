import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import te from "./module-ma_13.js";
import tr from "./module-FG_12.js";
const tn = "ArrayBuffer";
const ArrayBuffer = te[tn];
$(
  {
    global: true,
    constructor: true,
    forced: tt[tn] !== ArrayBuffer,
  },
  {
    ArrayBuffer,
  },
);
tr(tn);
