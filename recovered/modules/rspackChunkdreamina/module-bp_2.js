import n from "g";
import i from "Y";
import a from "c2";
import forced from "MM";
const s = i("Array");
n(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    of: function () {
      const t = a(this) ? this : i("Observable");
      for (var e = arguments.length, r = s(e), n = 0; n < e;) {
        r[n] = arguments[n++];
      }
      return new t(function (t) {
        for (let n = 0; n < e; n++) {
          t.next(r[n]);
          if (t.closed) {
            return;
          }
        }
        t.complete();
      });
    },
  },
);
