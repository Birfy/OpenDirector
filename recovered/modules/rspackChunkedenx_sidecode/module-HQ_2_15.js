import n from "./module-A_16.js";
import o from "./module-nyn_15.js";
import i from "./module-bYn_15.js";
import a from "./module-mS_16.js";
n(
  {
    target: "Array",
    proto: true,
    forced: !i("groupBy"),
  },
  {
    groupBy: function (r) {
      const t = arguments.length > 1 ? arguments[1] : undefined;
      return o(this, r, t);
    },
  },
);
a("groupBy");
