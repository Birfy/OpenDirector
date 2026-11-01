import n from "g";
import i from "ztR";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateKeys: function (t) {
      return new i(t, "keys");
    },
  },
);
