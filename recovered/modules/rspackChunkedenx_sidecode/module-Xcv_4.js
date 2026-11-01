import n from "./module-A_5.js";
import i from "./module-xK_4.js";
import o from "./module-er_4.js";
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
