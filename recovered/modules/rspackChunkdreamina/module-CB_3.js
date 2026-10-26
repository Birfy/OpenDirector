import n from "g";
import i from "ztR";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateValues: function (t) {
      return new i(t, "values");
    },
  },
);
