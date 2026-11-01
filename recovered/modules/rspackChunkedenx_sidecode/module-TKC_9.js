import n from "./module-A_10.js";
import o from "./module-NI_9.js";
n(
  {
    target: "Number",
    stat: true,
    forced: true,
  },
  {
    range: function (t, e, r) {
      return new o(t, e, r, "number", 0, 1);
    },
  },
);
