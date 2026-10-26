import n from "./module-A_20.js";
import o from "./module-O9_19.js";
import i from "./module-Y_20.js";
import a from "./module-iJ_19.js";
import s from "./module-D_2_19.js";
import u from "./module-r9_19.js";
const f = /^\s*class\b/;
const l = o(f.exec);
const h = (r) => {
  try {
    if (!u || !l(f, a(r))) {
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
      return i(r) && !h(r);
    },
  },
);
