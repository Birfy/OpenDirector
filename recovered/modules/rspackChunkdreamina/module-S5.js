import n from "g";
import i from "Y";
import a from "p3";
import o from "IF";
import s from "c2";
import A from "jn";
import c from "T";
import u from "Fm";
import l from "Nt";
import forced from "MM";
const f = l("observable");
n(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    from: function (t) {
      const e = s(this) ? this : i("Observable");
      const r = c(o(t), f);
      if (r) {
        const n = o(a(r, t));
        if (n.constructor === e) {
          return n;
        }
        return new e(function (t) {
          return n.subscribe(t);
        });
      }
      const l = A(t);
      return new e(function (t) {
        u(
          l,
          function (e, r) {
            t.next(e);
            if (t.closed) {
              return r();
            }
          },
          {
            IS_ITERATOR: true,
            INTERRUPTED: true,
          },
        );
        t.complete();
      });
    },
  },
);
