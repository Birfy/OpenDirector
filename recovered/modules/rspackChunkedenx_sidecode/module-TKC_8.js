import n from "./module-A_9.js";
import i from "./module-NI_8.js";
n(
  {
    target: "Number",
    stat: true,
    forced: true,
  },
  {
    range: function (t, r, e) {
      return new i(t, r, e, "number", 0, 1);
    },
  },
);
