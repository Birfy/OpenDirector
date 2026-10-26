import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-Y.js";
import a from "./module-iJ.js";
import s from "./module-D_2.js";
import u from "./module-r9.js";
const f = /^\s*class\b/;
const h = o(f.exec);
const l = (t) => {
  try {
    if (!u || !h(f, a(t))) {
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
      return i(t) && !l(t);
    },
  },
);
