import n from "./module-A_11.js";
import o from "./module-O9_10.js";
import i from "./module-Y_11.js";
import a from "./module-iJ_10.js";
import s from "./module-D_2_10.js";
import u from "./module-r9_10.js";
const f = /^\s*class\b/;
const l = o(f.exec);
const h = (t) => {
  try {
    if (!u || !l(f, a(t))) {
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
