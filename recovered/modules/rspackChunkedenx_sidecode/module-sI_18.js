import n from "./module-A_19.js";
import o from "./module-N_18.js";
import _i from "./module-FK_18.js";
import a from "./module-xl_19.js";
import s from "./module-YR_18.js";
import u from "./module-Y_19.js";
import c from "./module-vE_18.js";
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
  const h = s("Promise").prototype.catch;
  if (f.catch !== h) {
    c(f, "catch", h, {
      unsafe: true,
    });
  }
}
