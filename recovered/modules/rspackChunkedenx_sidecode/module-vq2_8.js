import n from "./module-A_9.js";
import i from "./module-M_2_8.js";
import o from "./module-d_9.js";
import s from "./module-NK_8.js";
import a from "./module-lC_8.js";
import u from "./module-c1_2_8.js";
import c from "./module-tH_8.js";
import f from "./module-V3_8.js";
import forced from "./module-N_8.js";
const l = c(function (t) {
  const r = this;
  return new t(function (e, n) {
    const s = function (t) {
      r.done = true;
      n(t);
    };
    const a = () => {
      try {
        t.resolve(o(i(r.next, r.iterator))).then((t) => {
          try {
            if (o(t).done) {
              r.done = true;
              e(f(undefined, true));
            } else if (r.remaining) {
              r.remaining--;
              a();
            } else {
              e(f(t.value, false));
            }
          } catch (error) {
            s(error);
          }
        }, s);
      } catch (error) {
        s(error);
      }
    };
    a();
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
      o(this);
      const remaining = u(a(+t));
      return new l(s(this), {
        remaining,
      });
    },
  },
);
