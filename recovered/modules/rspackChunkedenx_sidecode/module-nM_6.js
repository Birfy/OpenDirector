import n from "./module-A_7.js";
import o from "./module-xK_6.js";
import a from "./module-vo_6.js";
import i from "./module-d_7.js";
import s from "./module-NK_6.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (t) {
      i(this);
      a(t);
      const r = s(this);
      let e = arguments.length < 2;
      let n = e ? undefined : arguments[1];
      let u = 0;
      o(
        r,
        function (r) {
          if (e) {
            e = false;
            n = r;
          } else {
            n = t(n, r, u);
          }
          u++;
        },
        {
          IS_RECORD: true,
        },
      );
      if (e) {
        throw TypeError("Reduce of empty iterator with no initial value");
      }
      return n;
    },
  },
);
