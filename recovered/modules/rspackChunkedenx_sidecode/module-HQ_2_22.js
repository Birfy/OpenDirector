import n from "./module-A_23.js";
import i from "./module-nyn_22.js";
import o from "./module-bYn_22.js";
import s from "./module-mS_23.js";
n(
  {
    target: "Array",
    proto: true,
    forced: !o("groupBy"),
  },
  {
    groupBy: function (t) {
      const r = arguments.length > 1 ? arguments[1] : undefined;
      return i(this, t, r);
    },
  },
);
s("groupBy");
