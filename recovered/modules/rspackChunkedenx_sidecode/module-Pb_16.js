import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-vo_16.js";
import a from "./module-d_17.js";
import s from "./module-y_2_16.js";
import u from "./module-YR_16.js";
import c from "./module-NK_16.js";
import f from "./module-Qd_17.js";
const l = u("Promise");
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (t) {
      a(this);
      i(t);
      const r = c(this);
      const r_iterator = r.iterator;
      const r_next = r.next;
      let u = arguments.length < 2;
      let v = u ? undefined : arguments[1];
      let p = 0;
      return new l(function (r, i) {
        const c = function (t) {
          f(r_iterator, i, t, i);
        };
        const d = () => {
          try {
            l.resolve(a(o(r_next, r_iterator))).then((e) => {
              try {
                if (a(e).done) {
                  if (u) {
                    i(
                      TypeError(
                        "Reduce of empty iterator with no initial value",
                      ),
                    );
                  } else {
                    r(v);
                  }
                } else {
                  const n = e.value;
                  if (u) {
                    u = false;
                    v = n;
                    d();
                  } else {
                    try {
                      const o = t(v, n, p);
                      const f = function (t) {
                        v = t;
                        d();
                      };
                      if (s(o)) {
                        l.resolve(o).then(f, c);
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
