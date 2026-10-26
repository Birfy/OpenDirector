import n from "./module-A_22.js";
import i from "./module-xK_21.js";
import o from "./module-er_21.js";
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
