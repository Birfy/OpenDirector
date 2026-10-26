import n from "./module-A_8.js";
import o from "./module-vo_7.js";
import i from "./module-zQ_8.js";
import a from "./module-vM_8.js";
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
