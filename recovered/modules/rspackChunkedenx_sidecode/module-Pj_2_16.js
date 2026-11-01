import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-vo_16.js";
import a from "./module-d_17.js";
import s from "./module-y_2_16.js";
import u from "./module-NK_16.js";
import c from "./module-tH_16.js";
import f from "./module-V3_16.js";
import l from "./module-w7_16.js";
import h from "./module-Qd_17.js";
import forced from "./module-N_16.js";
const p = c(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_mapper = r.mapper;
  return new t(function (i, u) {
    const c = function (t) {
      r.done = true;
      u(t);
    };
    const v = function (t) {
      h(r_iterator, c, t, c);
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
                const u = r_mapper(o, r.counter++);
                const h = function (t) {
                  try {
                    r.inner = l(t);
                    d();
                  } catch (error) {
                    v(error);
                  }
                };
                if (s(u)) {
                  t.resolve(u).then(h, v);
                } else {
                  h(u);
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
      return new p(u(this), {
        mapper,
        inner: null,
      });
    },
  },
);
