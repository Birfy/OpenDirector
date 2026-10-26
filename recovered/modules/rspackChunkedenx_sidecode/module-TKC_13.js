import n from "./module-A_14.js";
import o from "./module-NI_13.js";
n(
  {
    target: "Number",
    stat: true,
    forced: true,
  },
  {
    range: function (r, t, e) {
      return new o(r, t, e, "number", 0, 1);
    },
  },
);
