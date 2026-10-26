import n from "./module-A_18.js";
import o from "./module-O9_17.js";
import i from "./module-Y_18.js";
import a from "./module-iJ_17.js";
import s from "./module-D_2_17.js";
import u from "./module-r9_17.js";
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
