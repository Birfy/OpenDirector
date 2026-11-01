import n from "./module-A_21.js";
import o from "./module-xK_20.js";
import i from "./module-vo_20.js";
import a from "./module-d_21.js";
import s from "./module-NK_20.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    some: function (t) {
      a(this);
      i(t);
      const r = s(this);
      let e = 0;
      return o(
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
