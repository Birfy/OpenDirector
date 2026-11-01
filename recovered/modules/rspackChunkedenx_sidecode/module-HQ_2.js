import n from "./module-A.js";
import o from "./module-nyn.js";
import i from "./module-bYn.js";
import a from "./module-mS.js";
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
