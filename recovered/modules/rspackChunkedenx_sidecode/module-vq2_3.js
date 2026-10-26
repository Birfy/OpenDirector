import n from "./module-A_4.js";
import i from "./module-M_2_3.js";
import o from "./module-d_4.js";
import s from "./module-NK_3.js";
import a from "./module-lC_3.js";
import u from "./module-c1_2_3.js";
import c from "./module-tH_3.js";
import f from "./module-V3_3.js";
import forced from "./module-N_3.js";
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
