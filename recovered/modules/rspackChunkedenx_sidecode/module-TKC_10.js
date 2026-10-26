import n from "./module-A_11.js";
import o from "./module-NI_10.js";
n(
  {
    target: "Number",
    stat: true,
    forced: true,
  },
  {
    range: function (t, r, e) {
      return new o(t, r, e, "number", 0, 1);
    },
  },
);
