import n from "./module-A_7.js";
import o from "./module-nyn_6.js";
import a from "./module-mS_7.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    group: function (t) {
      const r = arguments.length > 1 ? arguments[1] : undefined;
      return o(this, t, r);
    },
  },
);
a("group");
