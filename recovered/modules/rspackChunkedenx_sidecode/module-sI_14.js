import n from "./module-A_15.js";
import o from "./module-N_14.js";
import _i from "./module-FK_14.js";
import a from "./module-xl_15.js";
import s from "./module-YR_14.js";
import c from "./module-Y_15.js";
import u from "./module-vE_14.js";
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
