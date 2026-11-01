import n from "./module-A_20.js";
import o from "./module-N_19.js";
import _i from "./module-FK_19.js";
import a from "./module-xl_20.js";
import s from "./module-YR_19.js";
import u from "./module-Y_20.js";
import c from "./module-vE_19.js";
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
    catch: function (r) {
      return this.then(undefined, r);
    },
  },
);
if (!o && u(a)) {
  const l = s("Promise").prototype.catch;
  if (f.catch !== l) {
    c(f, "catch", l, {
      unsafe: true,
    });
  }
}
