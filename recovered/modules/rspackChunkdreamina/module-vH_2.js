import n from "g";
import i from "p3";
import a from "B";
import o from "IF";
import s from "N";
import A from "ju";
import c from "NZ";
import u from "SM";
import l from "VQ";
import forced from "K";
const f = c(function (t) {
  const e = this;
  const e_iterator = e.iterator;
  const e_predicate = e.predicate;
  return new t(function (a, A) {
    const c = function (t) {
      e.done = true;
      A(t);
    };
    const h = function (t) {
      l(e_iterator, c, t, c);
    };
    const f = () => {
      try {
        t.resolve(o(i(e.next, e_iterator))).then((r) => {
          try {
            if (o(r).done) {
              e.done = true;
              a(u(undefined, true));
            } else {
              const i = r.value;
              try {
                const A = e_predicate(i, e.counter++);
                const l = function (t) {
                  if (t) {
                    a(u(i, false));
                  } else {
                    f();
                  }
                };
                if (s(A)) {
                  t.resolve(A).then(l, h);
                } else {
                  l(A);
                }
              } catch (error) {
                h(error);
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
    f();
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
    filter: function (predicate) {
      o(this);
      a(predicate);
      return new f(A(this), {
        predicate,
      });
    },
  },
);
