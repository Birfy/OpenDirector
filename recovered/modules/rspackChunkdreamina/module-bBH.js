import n from "g";
import i from "B";
import a from "vP";
import o from "jnk";
n(
  {
    target: "Map",
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
      o(e, function (i, a) {
        if (r) {
          r = false;
          n = i;
        } else {
          n = t(n, i, a, e);
        }
      });
      if (r) {
        throw TypeError("Reduce of empty map with no initial value");
      }
      return n;
    },
  },
);
