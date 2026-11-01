import n from "g";
import i from "PF";
n(
  {
    target: "Number",
    stat: true,
    forced: true,
  },
  {
    range: function (t, e, r) {
      return new i(t, e, r, "number", 0, 1);
    },
  },
);
