import n from "./module-A_21.js";
import o from "./module-xK_20.js";
import i from "./module-er_20.js";
n(
  {
    target: "Object",
    stat: true,
  },
  {
    fromEntries: function (t) {
      const r = {};
      o(
        t,
        function (t, e) {
          i(r, t, e);
        },
        {
          AS_ENTRIES: true,
        },
      );
      return r;
    },
  },
);
