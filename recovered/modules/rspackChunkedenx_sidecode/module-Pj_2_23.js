import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-vo_23.js";
import a from "./module-d_24.js";
import s from "./module-y_2_23.js";
import c from "./module-NK_23.js";
import u from "./module-tH_23.js";
import f from "./module-V3_23.js";
import l from "./module-w7_23.js";
import h from "./module-Qd_24.js";
import forced from "./module-N_23.js";
const p = u(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_mapper = r.mapper;
  return new t(function (i, c) {
    const u = function (t) {
      r.done = true;
      c(t);
    };
    const v = function (t) {
      h(r_iterator, u, t, u);
    };
    const p = () => {
      try {
        t.resolve(a(o(r.next, r_iterator))).then((e) => {
          try {
            if (a(e).done) {
              r.done = true;
              i(f(undefined, true));
            } else {
              const o = e.value;
              try {
                const c = r_mapper(o, r.counter++);
                const h = function (t) {
                  try {
                    r.inner = l(t);
                    d();
                  } catch (error) {
                    v(error);
                  }
                };
                if (s(c)) {
                  t.resolve(c).then(h, v);
                } else {
                  h(c);
                }
              } catch (error) {
                v(error);
              }
            }
          } catch (error) {
            u(error);
          }
        }, u);
      } catch (error) {
        u(error);
      }
    };
    var d = () => {
      const r_inner = r.inner;
      if (r_inner) {
        try {
          t.resolve(a(o(r_inner.next, r_inner.iterator))).then((t) => {
            try {
              if (a(t).done) {
                r.inner = null;
                p();
              } else {
                i(f(t.value, false));
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
      return new p(c(this), {
        mapper,
        inner: null,
      });
    },
  },
);
