import n from "./module-A_12.js";
import o from "./module-xK_11.js";
import i from "./module-vo_11.js";
import a from "./module-d_12.js";
import s from "./module-NK_11.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (r) {
      a(this);
      i(r);
      const t = s(this);
      let e = arguments.length < 2;
      let n = e ? undefined : arguments[1];
      let c = 0;
      o(
        t,
        function (t) {
          if (e) {
            e = false;
            n = t;
          } else {
            n = r(n, t, c);
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
