import n from "g";
import i from "ztR";
n(
  {
    target: "Object",
    stat: true,
    forced: true,
  },
  {
    iterateEntries: function (t) {
      return new i(t, "entries");
    },
  },
);
