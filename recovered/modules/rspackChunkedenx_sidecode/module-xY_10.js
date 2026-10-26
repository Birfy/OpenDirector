import n from "./module-M_2_9.js";
import o from "./module-vo_9.js";
import i from "./module-d_10.js";
import a from "./module-y_2_9.js";
import s from "./module-MU_9.js";
import u from "./module-YR_9.js";
import c from "./module-NK_9.js";
import f from "./module-Qd_10.js";
const l = (t) => {
  const e = t === 0;
  const r = t === 1;
  const l = t === 2;
  const h = t === 3;
  return function (t, v, d) {
    i(t);
    const p = v !== undefined;
    if (p || !e) {
      o(v);
    }
    const g = c(t);
    const y = u("Promise");
    const g_iterator = g.iterator;
    const g_next = g.next;
    let w = 0;
    return new y(function (t, o) {
      const u = function (t) {
        f(g_iterator, o, t, o);
      };
      const c = () => {
        try {
          if (p) {
            try {
              s(w);
            } catch (error) {
              u(error);
            }
          }
          y.resolve(i(n(g_next, g_iterator))).then((n) => {
            try {
              if (i(n).done) {
                if (e) {
                  d.length = w;
                  t(d);
                } else {
                  t(!h && (l || undefined));
                }
              } else {
                const s = n.value;
                try {
                  if (p) {
                    const g = v(s, w);
                    const b = function (n) {
                      if (r) {
                        c();
                      } else if (l) {
                        if (n) {
                          c();
                        } else {
                          f(g_iterator, t, false, o);
                        }
                      } else if (e) {
                        try {
                          d[w++] = n;
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
                      y.resolve(g).then(b, u);
                    } else {
                      b(g);
                    }
                  } else {
                    d[w++] = s;
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
