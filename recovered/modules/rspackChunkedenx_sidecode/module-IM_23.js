import n from "./module-A_24.js";
import o from "./module-xK_23.js";
import i from "./module-vo_23.js";
import a from "./module-d_24.js";
import s from "./module-NK_23.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    find: function (t) {
      a(this);
      i(t);
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
