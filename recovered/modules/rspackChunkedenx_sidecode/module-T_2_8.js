import { f } from "./module-t_9.js";
export default function (t, r, e) {
  if (!(e in t)) {
    f(t, e, {
      configurable: true,
      get: function () {
        return r[e];
      },
      set: function (t) {
        r[e] = t;
      },
    });
  }
}
