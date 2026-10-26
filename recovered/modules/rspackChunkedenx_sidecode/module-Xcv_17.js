import n from "./module-A_18.js";
import o from "./module-xK_17.js";
import i from "./module-er_17.js";
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
