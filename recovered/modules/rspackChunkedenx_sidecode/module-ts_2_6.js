import n from "./module-A_7.js";
import o from "./module-vo_6.js";
import a from "./module-ot_7.js";
import i from "./module-JA_7.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    reduce: function (t) {
      const r = a(this);
      let e = arguments.length < 2;
      let n = e ? undefined : arguments[1];
      o(t);
      i(r, function (o, a) {
        if (e) {
          e = false;
          n = o;
        } else {
          n = t(n, o, a, r);
        }
      });
      if (e) {
        throw TypeError("Reduce of empty map with no initial value");
      }
      return n;
    },
  },
);
