import n from "./module-A_6.js";
import i from "./module-nyn_5.js";
import o from "./module-bYn_5.js";
import s from "./module-mS_6.js";
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
