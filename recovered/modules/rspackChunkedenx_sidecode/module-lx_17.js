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
