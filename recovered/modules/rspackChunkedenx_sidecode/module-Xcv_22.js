import n from "./module-A_23.js";
import i from "./module-xK_22.js";
import o from "./module-er_22.js";
n(
  {
    target: "Object",
    stat: true,
  },
  {
    fromEntries: function (t) {
      const r = {};
      i(
        t,
        function (t, e) {
          o(r, t, e);
        },
        {
          AS_ENTRIES: true,
        },
      );
      return r;
    },
  },
);
