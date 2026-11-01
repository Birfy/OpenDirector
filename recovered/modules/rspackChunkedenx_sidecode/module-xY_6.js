import n from "./module-M_2_5.js";
import i from "./module-vo_5.js";
import o from "./module-d_6.js";
import s from "./module-y_2_5.js";
import a from "./module-MU_5.js";
import u from "./module-YR_5.js";
import c from "./module-NK_5.js";
import f from "./module-Qd_6.js";
const h = (t) => {
  const r = t === 0;
  const e = t === 1;
  const h = t === 2;
  const l = t === 3;
  return function (t, v, p) {
    o(t);
    const d = v !== undefined;
    if (d || !r) {
      i(v);
    }
    const g = c(t);
    const y = u("Promise");
    const g_iterator = g.iterator;
    const g_next = g.next;
    let A = 0;
    return new y(function (t, i) {
      const u = function (t) {
        f(g_iterator, i, t, i);
      };
      const c = () => {
        try {
          if (d) {
            try {
              a(A);
            } catch (error) {
              u(error);
            }
          }
          y.resolve(o(n(g_next, g_iterator))).then((n) => {
            try {
              if (o(n).done) {
                if (r) {
                  p.length = A;
                  t(p);
                } else {
                  t(!l && (h || undefined));
                }
              } else {
                const a = n.value;
                try {
                  if (d) {
                    const g = v(a, A);
                    const m = function (n) {
                      if (e) {
                        c();
                      } else if (h) {
                        if (n) {
                          c();
                        } else {
                          f(g_iterator, t, false, i);
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
                          f(g_iterator, t, l || a, i);
                        } else {
                          c();
                        }
                      }
                    };
                    if (s(g)) {
                      y.resolve(g).then(m, u);
                    } else {
                      m(g);
                    }
                  } else {
                    p[A++] = a;
                    c();
                  }
                } catch (error) {
                  u(error);
                }
              }
            } catch (error) {
              i(error);
            }
          }, i);
        } catch (error) {
          i(error);
        }
      };
      c();
    });
  };
};
export default {
  toArray: h(0),
  forEach: h(1),
  every: h(2),
  some: h(3),
  find: h(4),
};
