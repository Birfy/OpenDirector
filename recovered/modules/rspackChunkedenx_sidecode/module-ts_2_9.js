import n from "./module-A_10.js";
import o from "./module-vo_9.js";
import i from "./module-ot_10.js";
import a from "./module-JA_10.js";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    reduce: function (t) {
      const e = i(this);
      let r = arguments.length < 2;
      let n = r ? undefined : arguments[1];
      o(t);
      a(e, function (o, i) {
        if (r) {
          r = false;
          n = o;
        } else {
          n = t(n, o, i, e);
        }
      });
      if (r) {
        throw TypeError("Reduce of empty map with no initial value");
      }
      return n;
    },
  },
);
