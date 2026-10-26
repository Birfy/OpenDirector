import n from "./module-A_16.js";
import o from "./module-vo_15.js";
import i from "./module-zQ_16.js";
import a from "./module-vM_16.js";
n(
  {
    target: "Set",
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
      a(t, function (o) {
        if (e) {
          e = false;
          n = o;
        } else {
          n = r(n, o, o, t);
        }
      });
      if (e) {
        throw TypeError("Reduce of empty set with no initial value");
      }
      return n;
    },
  },
);
