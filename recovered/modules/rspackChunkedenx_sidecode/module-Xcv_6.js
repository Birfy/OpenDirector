import n from "./module-A_7.js";
import o from "./module-xK_6.js";
import a from "./module-er_6.js";
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
          a(r, t, e);
        },
        {
          AS_ENTRIES: true,
        },
      );
      return r;
    },
  },
);
