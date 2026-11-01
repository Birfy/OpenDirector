import n from "./module-A_20.js";
import o from "./module-xK_19.js";
import i from "./module-vo_19.js";
import a from "./module-d_20.js";
import s from "./module-NK_19.js";
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
