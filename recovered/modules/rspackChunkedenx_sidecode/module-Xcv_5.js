import n from "./module-A_6.js";
import i from "./module-xK_5.js";
import o from "./module-er_5.js";
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
