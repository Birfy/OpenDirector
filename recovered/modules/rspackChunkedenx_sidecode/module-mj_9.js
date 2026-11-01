import n from "./module-A_10.js";
import o from "./module-vo_9.js";
import i from "./module-zQ_10.js";
import a from "./module-vM_10.js";
n(
  {
    target: "Set",
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
      a(e, function (o) {
        if (r) {
          r = false;
          n = o;
        } else {
          n = t(n, o, o, e);
        }
      });
      if (r) {
        throw TypeError("Reduce of empty set with no initial value");
      }
      return n;
    },
  },
);
