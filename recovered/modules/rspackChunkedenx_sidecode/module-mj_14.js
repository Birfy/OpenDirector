import n from "./module-A_15.js";
import o from "./module-vo_14.js";
import i from "./module-zQ_15.js";
import a from "./module-vM_15.js";
n(
  {
    target: "Set",
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
      a(r, function (o) {
        if (e) {
          e = false;
          n = o;
        } else {
          n = t(n, o, o, r);
        }
      });
      if (e) {
        throw TypeError("Reduce of empty set with no initial value");
      }
      return n;
    },
  },
);
