import n from "./module-A_6.js";
import i from "./module-YR_5.js";
import o from "./module-yM_6.js";
import forced from "./module-dy_7.js";
const a = i("Array");
n(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    of: function () {
      const t = o(this) ? this : i("Observable");
      for (var r = arguments.length, e = a(r), n = 0; n < r;) {
        e[n] = arguments[n++];
      }
      return new t(function (t) {
        for (let n = 0; n < r; n++) {
          t.next(e[n]);
          if (t.closed) {
            return;
          }
        }
        t.complete();
      });
    },
  },
);
