import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import i from "./module-vo_14.js";
import a from "./module-d_15.js";
import s from "./module-y_2_14.js";
import c from "./module-YR_14.js";
import u from "./module-NK_14.js";
import f from "./module-Qd_15.js";
const l = c("Promise");
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
      const r = u(this);
      const r_iterator = r.iterator;
      const r_next = r.next;
      let c = arguments.length < 2;
      let v = c ? undefined : arguments[1];
      let p = 0;
      return new l(function (r, i) {
        const u = function (t) {
          f(r_iterator, i, t, i);
        };
        const d = () => {
          try {
            l.resolve(a(o(r_next, r_iterator))).then((e) => {
              try {
                if (a(e).done) {
                  if (c) {
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
                  if (c) {
                    c = false;
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
                        l.resolve(o).then(f, u);
                      } else {
                        f(o);
                      }
                    } catch (error) {
                      u(error);
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
