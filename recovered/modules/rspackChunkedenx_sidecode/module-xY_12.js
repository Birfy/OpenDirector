import n from "./module-M_2_11.js";
import o from "./module-vo_11.js";
import i from "./module-d_12.js";
import a from "./module-y_2_11.js";
import s from "./module-MU_11.js";
import u from "./module-YR_11.js";
import c from "./module-NK_11.js";
import f from "./module-Qd_12.js";
const h = (r) => {
  const t = r === 0;
  const e = r === 1;
  const h = r === 2;
  const l = r === 3;
  return function (r, v, p) {
    i(r);
    const d = v !== undefined;
    if (d || !t) {
      o(v);
    }
    const g = c(r);
    const y = u("Promise");
    const g_iterator = g.iterator;
    const g_next = g.next;
    let A = 0;
    return new y(function (r, o) {
      const u = function (r) {
        f(g_iterator, o, r, o);
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
                if (t) {
                  p.length = A;
                  r(p);
                } else {
                  r(!l && (h || undefined));
                }
              } else {
                const s = n.value;
                try {
                  if (d) {
                    const g = v(s, A);
                    const m = function (n) {
                      if (e) {
                        c();
                      } else if (h) {
                        if (n) {
                          c();
                        } else {
                          f(g_iterator, r, false, o);
                        }
                      } else if (t) {
                        try {
                          p[A++] = n;
                          c();
                        } catch (error) {
                          u(error);
                        }
                      } else {
                        if (n) {
                          f(g_iterator, r, l || s, o);
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
  toArray: h(0),
  forEach: h(1),
  every: h(2),
  some: h(3),
  find: h(4),
};
