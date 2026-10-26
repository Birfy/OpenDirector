import n from "g";
import i from "p3";
import a from "B";
import o from "IF";
import s from "N";
import A from "Y";
import c from "ju";
import u from "VQ";
const l = A("Promise");
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (t) {
      o(this);
      a(t);
      const e = c(this);
      const e_iterator = e.iterator;
      const e_next = e.next;
      let A = arguments.length < 2;
      let f = A ? undefined : arguments[1];
      let g = 0;
      return new l(function (e, a) {
        const c = function (t) {
          u(e_iterator, a, t, a);
        };
        const d = () => {
          try {
            l.resolve(o(i(e_next, e_iterator))).then((r) => {
              try {
                if (o(r).done) {
                  if (A) {
                    a(
                      TypeError(
                        "Reduce of empty iterator with no initial value",
                      ),
                    );
                  } else {
                    e(f);
                  }
                } else {
                  const n = r.value;
                  if (A) {
                    A = false;
                    f = n;
                    d();
                  } else {
                    try {
                      const i = t(f, n, g);
                      const u = function (t) {
                        f = t;
                        d();
                      };
                      if (s(i)) {
                        l.resolve(i).then(u, c);
                      } else {
                        u(i);
                      }
                    } catch (error) {
                      c(error);
                    }
                  }
                }
                g++;
              } catch (error) {
                a(error);
              }
            }, a);
          } catch (error) {
            a(error);
          }
        };
        d();
      });
    },
  },
);
