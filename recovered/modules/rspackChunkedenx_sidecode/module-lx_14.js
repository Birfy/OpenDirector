import n from "./module-A_15.js";
import o from "./module-xK_14.js";
import i from "./module-vo_14.js";
import a from "./module-d_15.js";
import s from "./module-NK_14.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    forEach: function (t) {
      a(this);
      i(t);
      const r = s(this);
      let e = 0;
      o(
        r,
        function (r) {
          t(r, e++);
        },
        {
          IS_RECORD: true,
        },
      );
    },
  },
);
