import n from "./module-A_8.js";
import o from "./module-N_7.js";
import _i from "./module-FK_7.js";
import a from "./module-xl_8.js";
import s from "./module-YR_7.js";
import u from "./module-Y_8.js";
import c from "./module-vE_7.js";
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
