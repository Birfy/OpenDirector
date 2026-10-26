import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-Y_13.js";
import tr from "./module-iJ_12.js";
import tn from "./module-D_2_12.js";
import ti from "./module-r9_12.js";
const ta = /^\s*class\b/;
const ts = tt(ta.exec);
const tf = (J) => {
  try {
    if (!ti || !ts(ta, tr(J))) {
      return false;
    }
  } catch (J) {}
  const Z = Object.getOwnPropertyDescriptor(J, "prototype");
  return !!Z && tn(Z, "writable") && !Z.writable;
};
$(
  {
    target: "Function",
    stat: true,
    sham: true,
    forced: true,
  },
  {
    isCallable: function (J) {
      return te(J) && !tf(J);
    },
  },
);
