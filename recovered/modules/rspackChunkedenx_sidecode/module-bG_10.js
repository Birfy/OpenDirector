import n from "./module-A_11.js";
import o from "./module-M_2_10.js";
import i from "./module-vo_10.js";
import a from "./module-d_11.js";
import s from "./module-y_2_10.js";
import u from "./module-NK_10.js";
import c from "./module-tH_10.js";
import f from "./module-V3_10.js";
import l from "./module-Qd_11.js";
import forced from "./module-N_10.js";
const v = c(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_predicate = r.predicate;
  return new t(function (i, u) {
    const c = function (t) {
      r.done = true;
      u(t);
    };
    const h = function (t) {
      l(r_iterator, c, t, c);
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
                const u = r_predicate(o, r.counter++);
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
