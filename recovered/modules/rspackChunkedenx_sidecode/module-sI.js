import n from "./module-A.js";
import o from "./module-N.js";
import _i from "./module-FK.js";
import a from "./module-xl.js";
import s from "./module-YR.js";
import u from "./module-Y.js";
import c from "./module-vE.js";
const _i_CONSTRUCTOR = _i.CONSTRUCTOR;
const f = a && a.prototype;
n(
  {
    target: "Promise",
    proto: true,
    forced: _i_CONSTRUCTOR,
    real: true,
  },
  {
    catch: function (t) {
      return this.then(undefined, t);
    },
  },
);
if (!o && u(a)) {
  const h = s("Promise").prototype.catch;
  if (f.catch !== h) {
    c(f, "catch", h, {
      unsafe: true,
    });
  }
}
