import n from "./module-A_20.js";
import o from "./module-NI_19.js";
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
