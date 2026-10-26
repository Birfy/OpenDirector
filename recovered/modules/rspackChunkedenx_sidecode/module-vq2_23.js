import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-d_24.js";
import a from "./module-NK_23.js";
import s from "./module-lC_23.js";
import c from "./module-c1_2_23.js";
import u from "./module-tH_23.js";
import f from "./module-V3_23.js";
import forced from "./module-N_23.js";
const h = u(function (t) {
  const r = this;
  return new t(function (e, n) {
    const a = function (t) {
      r.done = true;
      n(t);
    };
    const s = () => {
      try {
        t.resolve(i(o(r.next, r.iterator))).then((t) => {
          try {
            if (i(t).done) {
              r.done = true;
              e(f(undefined, true));
            } else if (r.remaining) {
              r.remaining--;
              s();
            } else {
              e(f(t.value, false));
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
    drop: function (t) {
      i(this);
      const remaining = c(s(+t));
      return new h(a(this), {
        remaining,
      });
    },
  },
);
