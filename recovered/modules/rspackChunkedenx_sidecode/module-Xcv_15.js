import n from "./module-A_16.js";
import o from "./module-xK_15.js";
import i from "./module-er_15.js";
n(
  {
    target: "Object",
    stat: true,
  },
  {
    fromEntries: function (r) {
      const t = {};
      o(
        r,
        function (r, e) {
          i(t, r, e);
        },
        {
          AS_ENTRIES: true,
        },
      );
      return t;
    },
  },
);
