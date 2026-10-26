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
