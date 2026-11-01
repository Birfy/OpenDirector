import n from "./module-M_2_20.js";
import o from "./module-vo_20.js";
import i from "./module-d_21.js";
import a from "./module-y_2_20.js";
import s from "./module-MU_20.js";
import c from "./module-YR_20.js";
import u from "./module-NK_20.js";
import f from "./module-Qd_21.js";
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
    const g = u(t);
    const y = c("Promise");
    const g_iterator = g.iterator;
    const g_next = g.next;
    let w = 0;
    return new y(function (t, o) {
      const c = function (t) {
        f(g_iterator, o, t, o);
      };
      const u = () => {
        try {
          if (d) {
            try {
              s(w);
            } catch (error) {
              c(error);
            }
          }
          y.resolve(i(n(g_next, g_iterator))).then((n) => {
            try {
              if (i(n).done) {
                if (r) {
                  p.length = w;
                  t(p);
                } else {
                  t(!h && (l || undefined));
                }
              } else {
                const s = n.value;
                try {
                  if (d) {
                    const g = v(s, w);
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
                          p[w++] = n;
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
                    if (a(g)) {
                      y.resolve(g).then(b, c);
                    } else {
                      b(g);
                    }
                  } else {
                    p[w++] = s;
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
