import n from "g";
import i from "B";
import a from "V2";
import o from "Ip";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    reduce: function (t) {
      const e = a(this);
      let r = arguments.length < 2;
      let n = r ? undefined : arguments[1];
      i(t);
      o(e, function (i) {
        if (r) {
          r = false;
          n = i;
        } else {
          n = t(n, i, i, e);
        }
      });
      if (r) {
        throw TypeError("Reduce of empty set with no initial value");
      }
      return n;
    },
  },
);
