import n from "./module-A_23.js";
import i from "./module-YR_22.js";
import o from "./module-yM_23.js";
import forced from "./module-dy_24.js";
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
