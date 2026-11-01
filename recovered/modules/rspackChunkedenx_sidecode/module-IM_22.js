import n from "./module-A_23.js";
import i from "./module-xK_22.js";
import o from "./module-vo_22.js";
import s from "./module-d_23.js";
import a from "./module-NK_22.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    find: function (t) {
      s(this);
      o(t);
      const r = a(this);
      let e = 0;
      return i(
        r,
        function (r, n) {
          if (t(r, e++)) {
            return n(r);
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
