import n from "g";
import i from "p3";
import a from "LL";
import o from "Fs";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    isSubsetOf: function (t) {
      return i(o, this, a(t));
    },
  },
);
