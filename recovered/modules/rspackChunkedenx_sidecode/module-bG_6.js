import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-vo_6.js";
import i from "./module-d_7.js";
import s from "./module-y_2_6.js";
import c from "./module-NK_6.js";
import u from "./module-tH_6.js";
import f from "./module-V3_6.js";
import l from "./module-Qd_7.js";
import forced from "./module-N_6.js";
const p = u(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_predicate = r.predicate;
  return new t(function (a, c) {
    const u = function (t) {
      r.done = true;
      c(t);
    };
    const h = function (t) {
      l(r_iterator, u, t, u);
    };
    const p = () => {
      try {
        t.resolve(i(o(r.next, r_iterator))).then((e) => {
          try {
            if (i(e).done) {
              r.done = true;
              a(f(undefined, true));
            } else {
              const o = e.value;
              try {
                const c = r_predicate(o, r.counter++);
                const l = function (t) {
                  if (t) {
                    a(f(o, false));
                  } else {
                    p();
                  }
                };
                if (s(c)) {
                  t.resolve(c).then(l, h);
                } else {
                  l(c);
                }
              } catch (error) {
                h(error);
              }
            }
          } catch (error) {
            u(error);
          }
        }, u);
      } catch (error) {
        u(error);
      }
    };
    p();
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
    filter: function (predicate) {
      i(this);
      a(predicate);
      return new p(c(this), {
        predicate,
      });
    },
  },
);
