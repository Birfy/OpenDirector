import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-vo.js";
import a from "./module-d.js";
import s from "./module-y_2.js";
import u from "./module-NK.js";
import c from "./module-tH.js";
import f from "./module-V3.js";
import h from "./module-Qd.js";
import forced from "./module-N.js";
const v = c(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_predicate = r.predicate;
  return new t(function (i, u) {
    const c = function (t) {
      r.done = true;
      u(t);
    };
    const l = function (t) {
      h(r_iterator, c, t, c);
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
                const h = function (t) {
                  if (t) {
                    i(f(o, false));
                  } else {
                    v();
                  }
                };
                if (s(u)) {
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
      a(this);
      i(predicate);
      return new v(u(this), {
        predicate,
      });
    },
  },
);
