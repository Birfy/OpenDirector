import n from "./module-A_11.js";
import o from "./module-nyn_10.js";
import i from "./module-bYn_10.js";
import a from "./module-mS_11.js";
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
