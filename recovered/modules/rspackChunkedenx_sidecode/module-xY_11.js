import n from "./module-M_2_10.js";
import o from "./module-vo_10.js";
import i from "./module-d_11.js";
import a from "./module-y_2_10.js";
import s from "./module-MU_10.js";
import u from "./module-YR_10.js";
import c from "./module-NK_10.js";
import f from "./module-Qd_11.js";
const l = (t) => {
  const r = t === 0;
  const e = t === 1;
  const l = t === 2;
  const h = t === 3;
  return function (t, v, p) {
    i(t);
    const d = v !== undefined;
    if (d || !r) {
      o(v);
    }
    const g = c(t);
    const y = u("Promise");
    const g_iterator = g.iterator;
    const g_next = g.next;
    let A = 0;
    return new y(function (t, o) {
      const u = function (t) {
        f(g_iterator, o, t, o);
      };
      const c = () => {
        try {
          if (d) {
            try {
              s(A);
            } catch (error) {
              u(error);
            }
          }
          y.resolve(i(n(g_next, g_iterator))).then((n) => {
            try {
              if (i(n).done) {
                if (r) {
                  p.length = A;
                  t(p);
                } else {
                  t(!h && (l || undefined));
                }
              } else {
                const s = n.value;
                try {
                  if (d) {
                    const g = v(s, A);
                    const m = function (n) {
                      if (e) {
                        c();
                      } else if (l) {
                        if (n) {
                          c();
                        } else {
                          f(g_iterator, t, false, o);
                        }
                      } else if (r) {
                        try {
                          p[A++] = n;
                          c();
                        } catch (error) {
                          u(error);
                        }
                      } else {
                        if (n) {
                          f(g_iterator, t, h || s, o);
                        } else {
                          c();
                        }
                      }
                    };
                    if (a(g)) {
                      y.resolve(g).then(m, u);
                    } else {
                      m(g);
                    }
                  } else {
                    p[A++] = s;
                    c();
                  }
                } catch (error) {
                  u(error);
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
      c();
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
