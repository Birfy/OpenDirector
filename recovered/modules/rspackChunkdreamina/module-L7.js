import n from "g";
import i from "p3";
import a from "LL";
import o from "eq";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    intersection: function (t) {
      return i(o, this, a(t));
    },
  },
);
