import n from "./module-A_5.js";
import i from "./module-nyn_4.js";
import o from "./module-bYn_4.js";
import s from "./module-mS_5.js";
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
