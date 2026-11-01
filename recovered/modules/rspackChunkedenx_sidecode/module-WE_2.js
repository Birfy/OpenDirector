import n from "./module-A.js";
import o from "./module-nyn.js";
import i from "./module-mS.js";
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
i("group");
