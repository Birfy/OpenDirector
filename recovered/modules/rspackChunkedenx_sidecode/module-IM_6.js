import n from "./module-A_7.js";
import o from "./module-xK_6.js";
import a from "./module-vo_6.js";
import i from "./module-d_7.js";
import s from "./module-NK_6.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    find: function (t) {
      i(this);
      a(t);
      const r = s(this);
      let e = 0;
      return o(
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
