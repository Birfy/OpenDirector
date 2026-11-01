import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-vo_9.js";
import a from "./module-d_10.js";
import s from "./module-y_2_9.js";
import u from "./module-NK_9.js";
import c from "./module-tH_9.js";
import f from "./module-V3_9.js";
import l from "./module-w7_9.js";
import h from "./module-Qd_10.js";
import forced from "./module-N_9.js";
const d = c(function (t) {
  const e = this;
  const e_iterator = e.iterator;
  const e_mapper = e.mapper;
  return new t(function (i, u) {
    const c = function (t) {
      e.done = true;
      u(t);
    };
    const v = function (t) {
      h(e_iterator, c, t, c);
    };
    const d = () => {
      try {
        t.resolve(a(o(e.next, e_iterator))).then((r) => {
          try {
            if (a(r).done) {
              e.done = true;
              i(f(undefined, true));
            } else {
              const o = r.value;
              try {
                const u = e_mapper(o, e.counter++);
                const h = function (t) {
                  try {
                    e.inner = l(t);
                    p();
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
    var p = () => {
      const e_inner = e.inner;
      if (e_inner) {
        try {
          t.resolve(a(o(e_inner.next, e_inner.iterator))).then((t) => {
            try {
              if (a(t).done) {
                e.inner = null;
                d();
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
        d();
      }
    };
    p();
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
      return new d(u(this), {
        mapper,
        inner: null,
      });
    },
  },
);
