import n from "g";
import i from "p3";
import a from "B";
import o from "IF";
import s from "N";
import A from "ju";
import c from "NZ";
import u from "SM";
import l from "kj";
import h from "VQ";
import forced from "K";
const g = c(function (t) {
  const e = this;
  const e_iterator = e.iterator;
  const e_mapper = e.mapper;
  return new t(function (a, A) {
    const c = function (t) {
      e.done = true;
      A(t);
    };
    const f = function (t) {
      h(e_iterator, c, t, c);
    };
    const g = () => {
      try {
        t.resolve(o(i(e.next, e_iterator))).then((r) => {
          try {
            if (o(r).done) {
              e.done = true;
              a(u(undefined, true));
            } else {
              const i = r.value;
              try {
                const A = e_mapper(i, e.counter++);
                const h = function (t) {
                  try {
                    e.inner = l(t);
                    d();
                  } catch (error) {
                    f(error);
                  }
                };
                if (s(A)) {
                  t.resolve(A).then(h, f);
                } else {
                  h(A);
                }
              } catch (error) {
                f(error);
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
      const e_inner = e.inner;
      if (e_inner) {
        try {
          t.resolve(o(i(e_inner.next, e_inner.iterator))).then((t) => {
            try {
              if (o(t).done) {
                e.inner = null;
                g();
              } else {
                a(u(t.value, false));
              }
            } catch (error) {
              f(error);
            }
          }, f);
        } catch (error) {
          f(error);
        }
      } else {
        g();
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
      o(this);
      a(mapper);
      return new g(A(this), {
        mapper,
        inner: null,
      });
    },
  },
);
