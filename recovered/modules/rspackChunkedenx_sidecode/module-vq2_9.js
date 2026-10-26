import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-d_10.js";
import a from "./module-NK_9.js";
import s from "./module-lC_9.js";
import u from "./module-c1_2_9.js";
import c from "./module-tH_9.js";
import f from "./module-V3_9.js";
import forced from "./module-N_9.js";
const h = c(function (t) {
  const e = this;
  return new t(function (r, n) {
    const a = function (t) {
      e.done = true;
      n(t);
    };
    const s = () => {
      try {
        t.resolve(i(o(e.next, e.iterator))).then((t) => {
          try {
            if (i(t).done) {
              e.done = true;
              r(f(undefined, true));
            } else if (e.remaining) {
              e.remaining--;
              s();
            } else {
              r(f(t.value, false));
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
