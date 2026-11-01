import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-Y_7.js";
import i from "./module-iJ_6.js";
import s from "./module-D_2_6.js";
import c from "./module-r9_6.js";
const f = /^\s*class\b/;
const l = o(f.exec);
const h = (t) => {
  try {
    if (!c || !l(f, i(t))) {
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
      return a(t) && !h(t);
    },
  },
);
