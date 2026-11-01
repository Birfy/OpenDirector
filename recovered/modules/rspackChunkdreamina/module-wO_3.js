import n from "g";
import i from "p3";
import a from "LL";
import o from "sr";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    isDisjointFrom: function (t) {
      return i(o, this, a(t));
    },
  },
);
