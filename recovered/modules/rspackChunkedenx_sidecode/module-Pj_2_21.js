import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
import o from "./module-vo_21.js";
import s from "./module-d_22.js";
import a from "./module-y_2_21.js";
import u from "./module-NK_21.js";
import c from "./module-tH_21.js";
import f from "./module-V3_21.js";
import h from "./module-w7_21.js";
import l from "./module-Qd_22.js";
import forced from "./module-N_21.js";
const p = c(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_mapper = r.mapper;
  return new t(function (o, u) {
    const c = function (t) {
      r.done = true;
      u(t);
    };
    const v = function (t) {
      l(r_iterator, c, t, c);
    };
    const p = () => {
      try {
        t.resolve(s(i(r.next, r_iterator))).then((e) => {
          try {
            if (s(e).done) {
              r.done = true;
              o(f(undefined, true));
            } else {
              const i = e.value;
              try {
                const u = r_mapper(i, r.counter++);
                const l = function (t) {
                  try {
                    r.inner = h(t);
                    d();
                  } catch (error) {
                    v(error);
                  }
                };
                if (a(u)) {
                  t.resolve(u).then(l, v);
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
      const r_inner = r.inner;
      if (r_inner) {
        try {
          t.resolve(s(i(r_inner.next, r_inner.iterator))).then((t) => {
            try {
              if (s(t).done) {
                r.inner = null;
                p();
              } else {
                o(f(t.value, false));
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
      s(this);
      o(mapper);
      return new p(u(this), {
        mapper,
        inner: null,
      });
    },
  },
);
