import n from "./module-A_6.js";
import i from "./module-xK_5.js";
import o from "./module-vo_5.js";
import s from "./module-d_6.js";
import a from "./module-NK_5.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    every: function (t) {
      s(this);
      o(t);
      const r = a(this);
      let e = 0;
      return !i(
        r,
        function (r, n) {
          if (!t(r, e++)) {
            return n();
          }
        },
        {
          IS_RECORD: true,
          INTERRUPTED: true,
        },
      ).stopped;
    },
  },
);
