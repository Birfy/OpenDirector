import n from "./module-A_14.js";
import o from "./module-xK_13.js";
import i from "./module-vo_13.js";
import a from "./module-d_14.js";
import s from "./module-NK_13.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    forEach: function (r) {
      a(this);
      i(r);
      const t = s(this);
      let e = 0;
      o(
        t,
        function (t) {
          r(t, e++);
        },
        {
          IS_RECORD: true,
        },
      );
    },
  },
);
