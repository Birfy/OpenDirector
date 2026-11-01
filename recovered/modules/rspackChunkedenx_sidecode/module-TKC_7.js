import n from "./module-A_8.js";
import o from "./module-NI_7.js";
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
