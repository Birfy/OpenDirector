import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-vo_6.js";
import i from "./module-d_7.js";
import s from "./module-y_2_6.js";
import c from "./module-YR_6.js";
import u from "./module-NK_6.js";
import f from "./module-Qd_7.js";
const l = c("Promise");
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (t) {
      i(this);
      a(t);
      const r = u(this);
      const r_iterator = r.iterator;
      const r_next = r.next;
      let c = arguments.length < 2;
      let p = c ? undefined : arguments[1];
      let v = 0;
      return new l(function (r, a) {
        const u = function (t) {
          f(r_iterator, a, t, a);
        };
        const d = () => {
          try {
            l.resolve(i(o(r_next, r_iterator))).then((e) => {
              try {
                if (i(e).done) {
                  if (c) {
                    a(
                      TypeError(
                        "Reduce of empty iterator with no initial value",
                      ),
                    );
                  } else {
                    r(p);
                  }
                } else {
                  const n = e.value;
                  if (c) {
                    c = false;
                    p = n;
                    d();
                  } else {
                    try {
                      const o = t(p, n, v);
                      const f = function (t) {
                        p = t;
                        d();
                      };
                      if (s(o)) {
                        l.resolve(o).then(f, u);
                      } else {
                        f(o);
                      }
                    } catch (error) {
                      u(error);
                    }
                  }
                }
                v++;
              } catch (error) {
                a(error);
              }
            }, a);
          } catch (error) {
            a(error);
          }
        };
        d();
      });
    },
  },
);
