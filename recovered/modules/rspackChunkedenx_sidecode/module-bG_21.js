import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
import o from "./module-vo_21.js";
import s from "./module-d_22.js";
import a from "./module-y_2_21.js";
import u from "./module-NK_21.js";
import c from "./module-tH_21.js";
import f from "./module-V3_21.js";
import h from "./module-Qd_22.js";
import forced from "./module-N_21.js";
const v = c(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_predicate = r.predicate;
  return new t(function (o, u) {
    const c = function (t) {
      r.done = true;
      u(t);
    };
    const l = function (t) {
      h(r_iterator, c, t, c);
    };
    const v = () => {
      try {
        t.resolve(s(i(r.next, r_iterator))).then((e) => {
          try {
            if (s(e).done) {
              r.done = true;
              o(f(undefined, true));
            } else {
              const i = e.value;
              try {
                const u = r_predicate(i, r.counter++);
                const h = function (t) {
                  if (t) {
                    o(f(i, false));
                  } else {
                    v();
                  }
                };
                if (a(u)) {
                  t.resolve(u).then(h, l);
                } else {
                  h(u);
                }
              } catch (error) {
                l(error);
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
      s(this);
      o(predicate);
      return new v(u(this), {
        predicate,
      });
    },
  },
);
