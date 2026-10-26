import n from "./module-A_15.js";
import o from "./module-YR_14.js";
import i from "./module-yM_15.js";
import forced from "./module-dy_16.js";
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
