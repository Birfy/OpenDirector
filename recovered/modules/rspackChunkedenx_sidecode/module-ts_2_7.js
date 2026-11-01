import n from "./module-A_8.js";
import o from "./module-vo_7.js";
import i from "./module-ot_8.js";
import a from "./module-JA_8.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    reduce: function (r) {
      const t = i(this);
      let e = arguments.length < 2;
      let n = e ? undefined : arguments[1];
      o(r);
      a(t, function (o, i) {
        if (e) {
          e = false;
          n = o;
        } else {
          n = r(n, o, i, t);
        }
      });
      if (e) {
        throw TypeError("Reduce of empty map with no initial value");
      }
      return n;
    },
  },
);
