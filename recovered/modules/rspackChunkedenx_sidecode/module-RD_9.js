import n from "./module-A_10.js";
import o from "./module-YR_9.js";
import i from "./module-yM_10.js";
import forced from "./module-dy_11.js";
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
