import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-vo_6.js";
import i from "./module-d_7.js";
import s from "./module-y_2_6.js";
import c from "./module-NK_6.js";
import u from "./module-tH_6.js";
import f from "./module-V3_6.js";
import l from "./module-w7_6.js";
import h from "./module-Qd_7.js";
import forced from "./module-N_6.js";
const v = u(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_mapper = r.mapper;
  return new t(function (a, c) {
    const u = function (t) {
      r.done = true;
      c(t);
    };
    const p = function (t) {
      h(r_iterator, u, t, u);
    };
    const v = () => {
      try {
        t.resolve(i(o(r.next, r_iterator))).then((e) => {
          try {
            if (i(e).done) {
              r.done = true;
              a(f(undefined, true));
            } else {
              const o = e.value;
              try {
                const c = r_mapper(o, r.counter++);
                const h = function (t) {
                  try {
                    r.inner = l(t);
                    d();
                  } catch (error) {
                    p(error);
                  }
                };
                if (s(c)) {
                  t.resolve(c).then(h, p);
                } else {
                  h(c);
                }
              } catch (error) {
                p(error);
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
          t.resolve(i(o(r_inner.next, r_inner.iterator))).then((t) => {
            try {
              if (i(t).done) {
                r.inner = null;
                v();
              } else {
                a(f(t.value, false));
              }
            } catch (error) {
              p(error);
            }
          }, p);
        } catch (error) {
          p(error);
        }
      } else {
        v();
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
      i(this);
      a(mapper);
      return new v(c(this), {
        mapper,
        inner: null,
      });
    },
  },
);
