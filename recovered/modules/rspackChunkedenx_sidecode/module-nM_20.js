import n from "./module-A_21.js";
import o from "./module-xK_20.js";
import i from "./module-vo_20.js";
import a from "./module-d_21.js";
import s from "./module-NK_20.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (t) {
      a(this);
      i(t);
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
