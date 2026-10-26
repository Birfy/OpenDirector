import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-d.js";
import a from "./module-NK.js";
import s from "./module-lC.js";
import u from "./module-c1_2.js";
import c from "./module-tH.js";
import f from "./module-V3.js";
import forced from "./module-N.js";
const l = c(function (t) {
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
      return new l(a(this), {
        remaining,
      });
    },
  },
);
