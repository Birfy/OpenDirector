import n from "g";
import i from "p3";
import a from "IF";
import o from "ju";
import s from "fyd";
import A from "OH";
import c from "NZ";
import u from "SM";
import forced from "K";
const h = c(function (t) {
  const e = this;
  return new t(function (r, n) {
    const o = function (t) {
      e.done = true;
      n(t);
    };
    const s = () => {
      try {
        t.resolve(a(i(e.next, e.iterator))).then((t) => {
          try {
            if (a(t).done) {
              e.done = true;
              r(u(undefined, true));
            } else if (e.remaining) {
              e.remaining--;
              s();
            } else {
              r(u(t.value, false));
            }
          } catch (error) {
            o(error);
          }
        }, o);
      } catch (error) {
        o(error);
      }
    };
    s();
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
    drop: function (t) {
      a(this);
      const remaining = A(s(+t));
      return new h(o(this), {
        remaining,
      });
    },
  },
);
