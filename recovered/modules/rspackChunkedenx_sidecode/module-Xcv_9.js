import n from "./module-A_10.js";
import o from "./module-xK_9.js";
import i from "./module-er_9.js";
n(
  {
    target: "Object",
    stat: true,
  },
  {
    fromEntries: function (t) {
      const e = {};
      o(
        t,
        function (t, r) {
          i(e, t, r);
        },
        {
          AS_ENTRIES: true,
        },
      );
      return e;
    },
  },
);
