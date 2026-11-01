import n from "./module-A_16.js";
import o from "./module-M_2_15.js";
import i from "./module-d_16.js";
import a from "./module-NK_15.js";
import s from "./module-lC_15.js";
import u from "./module-c1_2_15.js";
import c from "./module-tH_15.js";
import f from "./module-V3_15.js";
import forced from "./module-N_15.js";
const l = c(function (r) {
  const t = this;
  return new r(function (e, n) {
    const a = function (r) {
      t.done = true;
      n(r);
    };
    const s = () => {
      try {
        r.resolve(i(o(t.next, t.iterator))).then((r) => {
          try {
            if (i(r).done) {
              t.done = true;
              e(f(undefined, true));
            } else if (t.remaining) {
              t.remaining--;
              s();
            } else {
              e(f(r.value, false));
            }
          } catch (error) {
            a(error);
          }
        }, a);
      } catch (error) {
        a(error);
      }
    };
    s();
  });
});
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
    forced,
  },
  {
    drop: function (r) {
      i(this);
      const remaining = u(s(+r));
      return new l(a(this), {
        remaining,
      });
    },
  },
);
