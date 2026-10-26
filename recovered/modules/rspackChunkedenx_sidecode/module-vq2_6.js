import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-d_7.js";
import i from "./module-NK_6.js";
import s from "./module-lC_6.js";
import c from "./module-c1_2_6.js";
import u from "./module-tH_6.js";
import f from "./module-V3_6.js";
import forced from "./module-N_6.js";
const h = u(function (t) {
  const r = this;
  return new t(function (e, n) {
    const i = function (t) {
      r.done = true;
      n(t);
    };
    const s = () => {
      try {
        t.resolve(a(o(r.next, r.iterator))).then((t) => {
          try {
            if (a(t).done) {
              r.done = true;
              e(f(undefined, true));
            } else if (r.remaining) {
              r.remaining--;
              s();
            } else {
              e(f(t.value, false));
            }
          } catch (error) {
            i(error);
          }
        }, i);
      } catch (error) {
        i(error);
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
      a(this);
      const remaining = c(s(+t));
      return new h(i(this), {
        remaining,
      });
    },
  },
);
