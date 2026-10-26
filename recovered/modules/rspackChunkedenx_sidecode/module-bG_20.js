import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
import i from "./module-vo_20.js";
import a from "./module-d_21.js";
import s from "./module-y_2_20.js";
import c from "./module-NK_20.js";
import u from "./module-tH_20.js";
import f from "./module-V3_20.js";
import l from "./module-Qd_21.js";
import forced from "./module-N_20.js";
const v = u(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_predicate = r.predicate;
  return new t(function (i, c) {
    const u = function (t) {
      r.done = true;
      c(t);
    };
    const h = function (t) {
      l(r_iterator, u, t, u);
    };
    const v = () => {
      try {
        t.resolve(a(o(r.next, r_iterator))).then((e) => {
          try {
            if (a(e).done) {
              r.done = true;
              i(f(undefined, true));
            } else {
              const o = e.value;
              try {
                const c = r_predicate(o, r.counter++);
                const l = function (t) {
                  if (t) {
                    i(f(o, false));
                  } else {
                    v();
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
    v();
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
      a(this);
      i(predicate);
      return new v(c(this), {
        predicate,
      });
    },
  },
);
