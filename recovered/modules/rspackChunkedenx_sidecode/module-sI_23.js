import n from "./module-A_24.js";
import o from "./module-N_23.js";
import _i from "./module-FK_23.js";
import a from "./module-xl_24.js";
import s from "./module-YR_23.js";
import c from "./module-Y_24.js";
import u from "./module-vE_23.js";
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
if (!o && c(a)) {
  const l = s("Promise").prototype.catch;
  if (f.catch !== l) {
    u(f, "catch", l, {
      unsafe: true,
    });
  }
}
