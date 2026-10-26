import n from "./module-A_21.js";
import o from "./module-O9_20.js";
import i from "./module-Y_21.js";
import a from "./module-iJ_20.js";
import s from "./module-D_2_20.js";
import c from "./module-r9_20.js";
const f = /^\s*class\b/;
const l = o(f.exec);
const h = (t) => {
  try {
    if (!c || !l(f, a(t))) {
      return false;
    }
  } catch (t) {}
  const r = Object.getOwnPropertyDescriptor(t, "prototype");
  return !!r && s(r, "writable") && !r.writable;
};
n(
  {
    target: "Function",
    stat: true,
    sham: true,
    forced: true,
  },
  {
    isCallable: function (t) {
      return i(t) && !h(t);
    },
  },
);
