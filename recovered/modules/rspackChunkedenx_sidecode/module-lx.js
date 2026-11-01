import n from "./module-A.js";
import o from "./module-xK.js";
import i from "./module-vo.js";
import a from "./module-d.js";
import s from "./module-NK.js";
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
