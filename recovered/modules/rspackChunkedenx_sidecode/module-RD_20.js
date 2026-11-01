import n from "./module-A_21.js";
import o from "./module-YR_20.js";
import i from "./module-yM_21.js";
import forced from "./module-dy_22.js";
const s = o("Array");
n(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    of: function () {
      const t = i(this) ? this : o("Observable");
      for (var r = arguments.length, e = s(r), n = 0; n < r;) {
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
