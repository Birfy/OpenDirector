import n from "./module-A_10.js";
import o from "./module-xK_9.js";
import i from "./module-vo_9.js";
import a from "./module-d_10.js";
import s from "./module-NK_9.js";
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
      const e = s(this);
      let r = 0;
      return o(
        e,
        function (e, n) {
          if (t(e, r++)) {
            return n(e);
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
