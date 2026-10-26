import n from "./module-A_6.js";
import i from "./module-vo_5.js";
import o from "./module-zQ_6.js";
import s from "./module-vM_6.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    reduce: function (t) {
      const r = o(this);
      let e = arguments.length < 2;
      let n = e ? undefined : arguments[1];
      i(t);
      s(r, function (i) {
        if (e) {
          e = false;
          n = i;
        } else {
          n = t(n, i, i, r);
        }
      });
      if (e) {
        throw TypeError("Reduce of empty set with no initial value");
      }
      return n;
    },
  },
);
