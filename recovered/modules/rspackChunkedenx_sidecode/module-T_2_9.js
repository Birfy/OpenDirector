import { f } from "./module-t_10.js";
export default function (t, e, r) {
  if (!(r in t)) {
    f(t, r, {
      configurable: true,
      get: function () {
        return e[r];
      },
      set: function (t) {
        e[r] = t;
      },
    });
  }
}
