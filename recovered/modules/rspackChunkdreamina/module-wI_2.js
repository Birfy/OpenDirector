import n from "g";
import i from "p3";
import a from "LL";
import o from "p0";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    isSupersetOf: function (t) {
      return i(o, this, a(t));
    },
  },
);
