import n from "./module-A_8.js";
import o from "./module-xK_7.js";
import i from "./module-vo_7.js";
import a from "./module-d_8.js";
import s from "./module-NK_7.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    find: function (r) {
      a(this);
      i(r);
      const t = s(this);
      let e = 0;
      return o(
        t,
        function (t, n) {
          if (r(t, e++)) {
            return n(t);
          }
        },
        {
          IS_RECORD: true,
          INTERRUPTED: true,
        },
      ).result;
    },
  },
);
