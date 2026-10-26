import n from "./module-A_14.js";
import o from "./module-xK_13.js";
import i from "./module-er_13.js";
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
