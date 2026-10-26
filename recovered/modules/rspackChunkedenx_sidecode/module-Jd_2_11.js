import n from "./module-A_12.js";
import o from "./module-O9_11.js";
import i from "./module-Y_12.js";
import a from "./module-iJ_11.js";
import s from "./module-D_2_11.js";
import u from "./module-r9_11.js";
const f = /^\s*class\b/;
const h = o(f.exec);
const l = (r) => {
  try {
    if (!u || !h(f, a(r))) {
      return false;
    }
  } catch (r) {}
  const t = Object.getOwnPropertyDescriptor(r, "prototype");
  return !!t && s(t, "writable") && !t.writable;
};
n(
  {
    target: "Function",
    stat: true,
    sham: true,
    forced: true,
  },
  {
    isCallable: function (r) {
      return i(r) && !l(r);
    },
  },
);
