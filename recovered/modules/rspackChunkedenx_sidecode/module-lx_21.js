import n from "./module-A_22.js";
import i from "./module-xK_21.js";
import o from "./module-vo_21.js";
import s from "./module-d_22.js";
import a from "./module-NK_21.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    forEach: function (t) {
      s(this);
      o(t);
      const r = a(this);
      let e = 0;
      i(
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
