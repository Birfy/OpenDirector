import n from "./module-A_3.js";
import i from "./module-O9_2.js";
import o from "./module-Y_3.js";
import s from "./module-iJ_2.js";
import a from "./module-D_2_2.js";
import u from "./module-r9_2.js";
const f = /^\s*class\b/;
const h = i(f.exec);
const l = (t) => {
  try {
    if (!u || !h(f, s(t))) {
      return false;
    }
  } catch (t) {}
  const r = Object.getOwnPropertyDescriptor(t, "prototype");
  return !!r && a(r, "writable") && !r.writable;
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
      return o(t) && !l(t);
    },
  },
);
