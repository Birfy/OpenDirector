import n from "./module-A.js";
import o from "./module-xK.js";
import i from "./module-er.js";
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
