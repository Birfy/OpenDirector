import n from "./module-A_6.js";
import i from "./module-vo_5.js";
import o from "./module-ot_6.js";
import s from "./module-JA_6.js";
n(
  {
    target: "Map",
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
      s(r, function (i, o) {
        if (e) {
          e = false;
          n = i;
        } else {
          n = t(n, i, o, r);
        }
      });
      if (e) {
        throw TypeError("Reduce of empty map with no initial value");
      }
      return n;
    },
  },
);
