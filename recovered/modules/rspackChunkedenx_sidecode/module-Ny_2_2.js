import n from "./module-A_3.js";
import i from "./module-xK_2.js";
import o from "./module-vo_2.js";
import s from "./module-d_3.js";
import a from "./module-NK_2.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    some: function (t) {
      s(this);
      o(t);
      const r = a(this);
      let e = 0;
      return i(
        r,
        function (r, n) {
          if (t(r, e++)) {
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
