import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-d_17.js";
import a from "./module-NK_16.js";
import s from "./module-lC_16.js";
import u from "./module-c1_2_16.js";
import c from "./module-tH_16.js";
import f from "./module-V3_16.js";
import forced from "./module-N_16.js";
const h = c(function (t) {
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
      const remaining = u(s(+t));
      return new h(a(this), {
        remaining,
      });
    },
  },
);
