import n from "./module-A_15.js";
import o from "./module-nyn_14.js";
import i from "./module-bYn_14.js";
import a from "./module-mS_15.js";
n(
  {
    target: "Array",
    proto: true,
    forced: !i("groupBy"),
  },
  {
    groupBy: function (t) {
      const r = arguments.length > 1 ? arguments[1] : undefined;
      return o(this, t, r);
    },
  },
);
a("groupBy");
