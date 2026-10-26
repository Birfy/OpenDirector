import n from "./module-M_2_6.js";
import o from "./module-vo_6.js";
import a from "./module-d_7.js";
import i from "./module-y_2_6.js";
import s from "./module-MU_6.js";
import c from "./module-YR_6.js";
import u from "./module-NK_6.js";
import f from "./module-Qd_7.js";
const l = (t) => {
  const r = t === 0;
  const e = t === 1;
  const l = t === 2;
  const h = t === 3;
  return function (t, p, v) {
    a(t);
    const d = p !== undefined;
    if (d || !r) {
      o(p);
    }
    const g = u(t);
    const y = c("Promise");
    const g_iterator = g.iterator;
    const g_next = g.next;
    let A = 0;
    return new y(function (t, o) {
      const c = function (t) {
        f(g_iterator, o, t, o);
      };
      const u = () => {
        try {
          if (d) {
            try {
              s(A);
            } catch (error) {
              c(error);
            }
          }
          y.resolve(a(n(g_next, g_iterator))).then((n) => {
            try {
              if (a(n).done) {
                if (r) {
                  v.length = A;
                  t(v);
                } else {
                  t(!h && (l || undefined));
                }
              } else {
                const s = n.value;
                try {
                  if (d) {
                    const g = p(s, A);
                    const b = function (n) {
                      if (e) {
                        u();
                      } else if (l) {
                        if (n) {
                          u();
                        } else {
                          f(g_iterator, t, false, o);
                        }
                      } else if (r) {
                        try {
                          v[A++] = n;
                          u();
                        } catch (error) {
                          c(error);
                        }
                      } else {
                        if (n) {
                          f(g_iterator, t, h || s, o);
                        } else {
                          u();
                        }
                      }
                    };
                    if (i(g)) {
                      y.resolve(g).then(b, c);
                    } else {
                      b(g);
                    }
                  } else {
                    v[A++] = s;
                    u();
                  }
                } catch (error) {
                  c(error);
                }
              }
            } catch (error) {
              o(error);
            }
          }, o);
        } catch (error) {
          o(error);
        }
      };
      u();
    });
  };
};
export default {
  toArray: l(0),
  forEach: l(1),
  every: l(2),
  some: l(3),
  find: l(4),
};
