import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-vo_9.js";
import a from "./module-d_10.js";
import s from "./module-y_2_9.js";
import u from "./module-YR_9.js";
import c from "./module-NK_9.js";
import f from "./module-Qd_10.js";
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
      const e = c(this);
      const e_iterator = e.iterator;
      const e_next = e.next;
      let u = arguments.length < 2;
      let v = u ? undefined : arguments[1];
      let d = 0;
      return new l(function (e, i) {
        const c = function (t) {
          f(e_iterator, i, t, i);
        };
        const p = () => {
          try {
            l.resolve(a(o(e_next, e_iterator))).then((r) => {
              try {
                if (a(r).done) {
                  if (u) {
                    i(
                      TypeError(
                        "Reduce of empty iterator with no initial value",
                      ),
                    );
                  } else {
                    e(v);
                  }
                } else {
                  const n = r.value;
                  if (u) {
                    u = false;
                    v = n;
                    p();
                  } else {
                    try {
                      const o = t(v, n, d);
                      const f = function (t) {
                        v = t;
                        p();
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
                d++;
              } catch (error) {
                i(error);
              }
            }, i);
          } catch (error) {
            i(error);
          }
        };
        p();
      });
    },
  },
);
