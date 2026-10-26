import n from "./module-A_11.js";
import o from "./module-vo_10.js";
import i from "./module-ot_11.js";
import a from "./module-JA_11.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    reduce: function (t) {
      const r = i(this);
      let e = arguments.length < 2;
      let n = e ? undefined : arguments[1];
      o(t);
      a(r, function (o, i) {
        if (e) {
          e = false;
          n = o;
        } else {
          n = t(n, o, i, r);
        }
      });
      if (e) {
        throw TypeError("Reduce of empty map with no initial value");
      }
      return n;
    },
  },
);
