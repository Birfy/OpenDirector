import n from "./module-A_3.js";
import i from "./module-nyn_2.js";
import o from "./module-mS_3.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    group: function (t) {
      const r = arguments.length > 1 ? arguments[1] : undefined;
      return i(this, t, r);
    },
  },
);
o("group");
