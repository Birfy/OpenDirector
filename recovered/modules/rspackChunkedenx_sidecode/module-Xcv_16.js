import n from "./module-A_17.js";
import o from "./module-xK_16.js";
import i from "./module-er_16.js";
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
