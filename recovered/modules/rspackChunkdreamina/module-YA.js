import n from "./module-g.js";
import o from "./module-Fm_2_2.js";
import i from "./module-Id_2.js";
n(
  {
    target: "Object",
    stat: true,
  },
  {
    fromEntries: function (e) {
      const t = {};
      o(
        e,
        function (e, r) {
          i(t, e, r);
        },
        {
          AS_ENTRIES: true,
        },
      );
      return t;
    },
  },
);
