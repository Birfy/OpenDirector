import n from "g";
import i from "IF";
import a from "zs";
import o from "PNn";
import s from "ju";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("K"),
  },
  {
    toAsync: function () {
      return new o(s(new a(s(i(this)))));
    },
  },
);
