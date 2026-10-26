import n from "./module-A_5.js";
import i from "./module-nyn_4.js";
import o from "./module-mS_5.js";
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
