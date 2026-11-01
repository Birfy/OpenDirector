import n from "./module-A_4.js";
import i from "./module-xK_3.js";
import o from "./module-vo_3.js";
import s from "./module-d_4.js";
import a from "./module-NK_3.js";
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
