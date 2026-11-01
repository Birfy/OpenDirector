import n from "./module-A_8.js";
import o from "./module-nyn_7.js";
import i from "./module-bYn_7.js";
import a from "./module-mS_8.js";
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
