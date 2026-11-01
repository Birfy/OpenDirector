import n from "./module-A_16.js";
import o from "./module-M_2_15.js";
import i from "./module-vo_15.js";
import a from "./module-d_16.js";
import s from "./module-y_2_15.js";
import u from "./module-YR_15.js";
import c from "./module-NK_15.js";
import f from "./module-Qd_16.js";
const h = u("Promise");
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (r) {
      a(this);
      i(r);
      const t = c(this);
      const t_iterator = t.iterator;
      const t_next = t.next;
      let u = arguments.length < 2;
      let v = u ? undefined : arguments[1];
      let p = 0;
      return new h(function (t, i) {
        const c = function (r) {
          f(t_iterator, i, r, i);
        };
        const d = () => {
          try {
            h.resolve(a(o(t_next, t_iterator))).then((e) => {
              try {
                if (a(e).done) {
                  if (u) {
                    i(
                      TypeError(
                        "Reduce of empty iterator with no initial value",
                      ),
                    );
                  } else {
                    t(v);
                  }
                } else {
                  const n = e.value;
                  if (u) {
                    u = false;
                    v = n;
                    d();
                  } else {
                    try {
                      const o = r(v, n, p);
                      const f = function (r) {
                        v = r;
                        d();
                      };
                      if (s(o)) {
                        h.resolve(o).then(f, c);
                      } else {
                        f(o);
                      }
                    } catch (error) {
                      c(error);
                    }
                  }
                }
                p++;
              } catch (error) {
                i(error);
              }
            }, i);
          } catch (error) {
            i(error);
          }
        };
        d();
      });
    },
  },
);
