import n from "./module-A_7.js";
import o from "./module-vo_6.js";
import a from "./module-zQ_7.js";
import i from "./module-vM_7.js";
n(
  {
    target: "Set",
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
      i(r, function (o) {
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
