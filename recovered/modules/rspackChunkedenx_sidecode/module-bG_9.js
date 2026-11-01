import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-vo_9.js";
import a from "./module-d_10.js";
import s from "./module-y_2_9.js";
import u from "./module-NK_9.js";
import c from "./module-tH_9.js";
import f from "./module-V3_9.js";
import l from "./module-Qd_10.js";
import forced from "./module-N_9.js";
const v = c(function (t) {
  const e = this;
  const e_iterator = e.iterator;
  const e_predicate = e.predicate;
  return new t(function (i, u) {
    const c = function (t) {
      e.done = true;
      u(t);
    };
    const h = function (t) {
      l(e_iterator, c, t, c);
    };
    const v = () => {
      try {
        t.resolve(a(o(e.next, e_iterator))).then((r) => {
          try {
            if (a(r).done) {
              e.done = true;
              i(f(undefined, true));
            } else {
              const o = r.value;
              try {
                const u = e_predicate(o, e.counter++);
                const l = function (t) {
                  if (t) {
                    i(f(o, false));
                  } else {
                    v();
                  }
                };
                if (s(u)) {
                  t.resolve(u).then(l, h);
                } else {
                  l(u);
                }
              } catch (error) {
                h(error);
              }
            }
          } catch (error) {
            c(error);
          }
        }, c);
      } catch (error) {
        c(error);
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
      return new v(u(this), {
        predicate,
      });
    },
  },
);
