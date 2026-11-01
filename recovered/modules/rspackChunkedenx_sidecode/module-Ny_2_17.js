import n from "./module-A_18.js";
import o from "./module-xK_17.js";
import i from "./module-vo_17.js";
import a from "./module-d_18.js";
import s from "./module-NK_17.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    some: function (r) {
      a(this);
      i(r);
      const t = s(this);
      let e = 0;
      return o(
        t,
        function (t, n) {
          if (r(t, e++)) {
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
