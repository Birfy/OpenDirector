import n from "./module-A_20.js";
import o from "./module-YR_19.js";
import i from "./module-yM_20.js";
import forced from "./module-dy_21.js";
const s = o("Array");
n(
  {
    target: "Observable",
    stat: true,
    forced,
  },
  {
    of: function () {
      const r = i(this) ? this : o("Observable");
      for (var t = arguments.length, e = s(t), n = 0; n < t;) {
        e[n] = arguments[n++];
      }
      return new r(function (r) {
        for (let n = 0; n < t; n++) {
          r.next(e[n]);
          if (r.closed) {
            return;
          }
        }
        r.complete();
      });
    },
  },
);
