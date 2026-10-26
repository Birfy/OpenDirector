import n from "./module-A_18.js";
import o from "./module-M_2_17.js";
import i from "./module-vo_17.js";
import a from "./module-d_18.js";
import s from "./module-y_2_17.js";
import u from "./module-NK_17.js";
import c from "./module-tH_17.js";
import f from "./module-V3_17.js";
import h from "./module-w7_17.js";
import l from "./module-Qd_18.js";
import forced from "./module-N_17.js";
const p = c(function (r) {
  const t = this;
  const t_iterator = t.iterator;
  const t_mapper = t.mapper;
  return new r(function (i, u) {
    const c = function (r) {
      t.done = true;
      u(r);
    };
    const v = function (r) {
      l(t_iterator, c, r, c);
    };
    const p = () => {
      try {
        r.resolve(a(o(t.next, t_iterator))).then((e) => {
          try {
            if (a(e).done) {
              t.done = true;
              i(f(undefined, true));
            } else {
              const o = e.value;
              try {
                const u = t_mapper(o, t.counter++);
                const l = function (r) {
                  try {
                    t.inner = h(r);
                    d();
                  } catch (error) {
                    v(error);
                  }
                };
                if (s(u)) {
                  r.resolve(u).then(l, v);
                } else {
                  l(u);
                }
              } catch (error) {
                v(error);
              }
            }
          } catch (error) {
            c(error);
          }
        }, c);
      } catch (error) {
        c(error);
      }
    };
    var d = () => {
      const t_inner = t.inner;
      if (t_inner) {
        try {
          r.resolve(a(o(t_inner.next, t_inner.iterator))).then((r) => {
            try {
              if (a(r).done) {
                t.inner = null;
                p();
              } else {
                i(f(r.value, false));
              }
            } catch (error) {
              v(error);
            }
          }, v);
        } catch (error) {
          v(error);
        }
      } else {
        p();
      }
    };
    d();
  });
});
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
    forced,
  },
  {
    flatMap: function (mapper) {
      a(this);
      i(mapper);
      return new p(u(this), {
        mapper,
        inner: null,
      });
    },
  },
);
