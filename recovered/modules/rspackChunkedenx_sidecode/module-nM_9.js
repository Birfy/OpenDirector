import n from "./module-A_10.js";
import o from "./module-xK_9.js";
import i from "./module-vo_9.js";
import a from "./module-d_10.js";
import s from "./module-NK_9.js";
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
      const e = s(this);
      let r = arguments.length < 2;
      let n = r ? undefined : arguments[1];
      let c = 0;
      o(
        e,
        function (e) {
          if (r) {
            r = false;
            n = e;
          } else {
            n = t(n, e, c);
          }
          c++;
        },
        {
          IS_RECORD: true,
        },
      );
      if (r) {
        throw TypeError("Reduce of empty iterator with no initial value");
      }
      return n;
    },
  },
);
