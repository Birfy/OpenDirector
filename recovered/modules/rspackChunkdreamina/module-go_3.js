import { f } from "./module-R_2.js";
export default function (e, t, r) {
  if (!(r in e)) {
    f(e, r, {
      configurable: true,
      get: function () {
        return t[r];
      },
      set: function (e) {
        t[r] = e;
      },
    });
  }
}
