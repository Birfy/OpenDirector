import n from "./module-A_4.js";
import i from "./module-M_2_3.js";
import o from "./module-vo_3.js";
import s from "./module-d_4.js";
import a from "./module-y_2_3.js";
import u from "./module-YR_3.js";
import c from "./module-NK_3.js";
import f from "./module-Qd_4.js";
const h = u("Promise");
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (t) {
      s(this);
      o(t);
      const r = c(this);
      const r_iterator = r.iterator;
      const r_next = r.next;
      let u = arguments.length < 2;
      let v = u ? undefined : arguments[1];
      let p = 0;
      return new h(function (r, o) {
        const c = function (t) {
          f(r_iterator, o, t, o);
        };
        const d = () => {
          try {
            h.resolve(s(i(r_next, r_iterator))).then((e) => {
              try {
                if (s(e).done) {
                  if (u) {
                    o(
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
                      const i = t(v, n, p);
                      const f = function (t) {
                        v = t;
                        d();
                      };
                      if (a(i)) {
                        h.resolve(i).then(f, c);
                      } else {
                        f(i);
                      }
                    } catch (error) {
                      c(error);
                    }
                  }
                }
                p++;
              } catch (error) {
                o(error);
              }
            }, o);
          } catch (error) {
            o(error);
          }
        };
        d();
      });
    },
  },
);
