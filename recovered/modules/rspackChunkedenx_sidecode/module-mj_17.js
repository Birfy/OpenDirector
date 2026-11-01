import n from "./module-A_18.js";
import o from "./module-vo_17.js";
import i from "./module-zQ_18.js";
import a from "./module-vM_18.js";
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
