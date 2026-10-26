import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import i from "./module-vo_7.js";
import a from "./module-d_8.js";
import s from "./module-y_2_7.js";
import u from "./module-NK_7.js";
import c from "./module-tH_7.js";
import f from "./module-V3_7.js";
import l from "./module-Qd_8.js";
import forced from "./module-N_7.js";
const v = c(function (r) {
  const t = this;
  const t_iterator = t.iterator;
  const t_predicate = t.predicate;
  return new r(function (i, u) {
    const c = function (r) {
      t.done = true;
      u(r);
    };
    const h = function (r) {
      l(t_iterator, c, r, c);
    };
    const v = () => {
      try {
        r.resolve(a(o(t.next, t_iterator))).then((e) => {
          try {
            if (a(e).done) {
              t.done = true;
              i(f(undefined, true));
            } else {
              const o = e.value;
              try {
                const u = t_predicate(o, t.counter++);
                const l = function (r) {
                  if (r) {
                    i(f(o, false));
                  } else {
                    v();
                  }
                };
                if (s(u)) {
                  r.resolve(u).then(l, h);
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
