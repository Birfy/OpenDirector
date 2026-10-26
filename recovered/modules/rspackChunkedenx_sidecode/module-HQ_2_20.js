import n from "./module-A_21.js";
import o from "./module-nyn_20.js";
import i from "./module-bYn_20.js";
import a from "./module-mS_21.js";
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
