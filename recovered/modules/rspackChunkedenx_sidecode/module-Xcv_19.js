import n from "./module-A_20.js";
import o from "./module-xK_19.js";
import i from "./module-er_19.js";
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
