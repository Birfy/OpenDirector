import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-vo.js";
import a from "./module-d.js";
import s from "./module-y_2.js";
import u from "./module-YR.js";
import c from "./module-NK.js";
import f from "./module-Qd.js";
const h = u("Promise");
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
      return new h(function (r, i) {
        const c = function (t) {
          f(r_iterator, i, t, i);
        };
        const d = () => {
          try {
            h.resolve(a(o(r_next, r_iterator))).then((e) => {
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
