import { f } from "./module-t_14.js";
export default function (r, t, e) {
  if (!(e in r)) {
    f(r, e, {
      configurable: true,
      get: function () {
        return t[e];
      },
      set: function (r) {
        t[e] = r;
      },
    });
  }
}
