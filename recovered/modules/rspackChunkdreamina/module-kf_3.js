import n from "./module-p3.js";
import o from "./module-B.js";
import i from "./module-IF_2.js";
import a from "./module-N.js";
import s from "./module-Bw_2.js";
import u from "./module-Y.js";
import c from "./module-ju_2.js";
import f from "./module-VQ_3.js";
const l = (e) => {
  const t = e === 0;
  const r = e === 1;
  const l = e === 2;
  const p = e === 3;
  return function (e, h, v) {
    i(e);
    const d = h !== undefined;
    if (d || !t) {
      o(h);
    }
    const g = c(e);
    const y = u("Promise");
    const g_iterator = g.iterator;
    const g_next = g.next;
    let b = 0;
    return new y(function (e, o) {
      const u = function (e) {
        f(g_iterator, o, e, o);
      };
      const c = () => {
        try {
          if (d) {
            try {
              s(b);
            } catch (error) {
              u(error);
            }
          }
          y.resolve(i(n(g_next, g_iterator))).then((n) => {
            try {
              if (i(n).done) {
                if (t) {
                  v.length = b;
                  e(v);
                } else {
                  e(!p && (l || undefined));
                }
              } else {
                const s = n.value;
                try {
                  if (d) {
                    const g = h(s, b);
                    const x = function (n) {
                      if (r) {
                        c();
                      } else if (l) {
                        if (n) {
                          c();
                        } else {
                          f(g_iterator, e, false, o);
                        }
                      } else if (t) {
                        try {
                          v[b++] = n;
                          c();
                        } catch (error) {
                          u(error);
                        }
                      } else {
                        if (n) {
                          f(g_iterator, e, p || s, o);
                        } else {
                          c();
                        }
                      }
                    };
                    if (a(g)) {
                      y.resolve(g).then(x, u);
                    } else {
                      x(g);
                    }
                  } else {
                    v[b++] = s;
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
