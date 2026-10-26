import n from "./module-A_3.js";
import i from "./module-xK_2.js";
import o from "./module-vo_2.js";
import s from "./module-d_3.js";
import a from "./module-NK_2.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (t) {
      s(this);
      o(t);
      const r = a(this);
      let e = arguments.length < 2;
      let n = e ? undefined : arguments[1];
      let c = 0;
      i(
        r,
        function (r) {
          if (e) {
            e = false;
            n = r;
          } else {
            n = t(n, r, c);
          }
          c++;
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
