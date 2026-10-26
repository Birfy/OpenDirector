import n from "./module-A_11.js";
import o from "./module-N_10.js";
import _i from "./module-FK_10.js";
import a from "./module-xl_11.js";
import s from "./module-YR_10.js";
import u from "./module-Y_11.js";
import c from "./module-vE_10.js";
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
  const l = s("Promise").prototype.catch;
  if (f.catch !== l) {
    c(f, "catch", l, {
      unsafe: true,
    });
  }
}
