import n from "./module-A_23.js";
import i from "./module-N_22.js";
import _o from "./module-FK_22.js";
import s from "./module-xl_23.js";
import a from "./module-YR_22.js";
import u from "./module-Y_23.js";
import c from "./module-vE_22.js";
const _o_CONSTRUCTOR = _o.CONSTRUCTOR;
const f = s && s.prototype;
n(
  {
    target: "Promise",
    proto: true,
    forced: _o_CONSTRUCTOR,
    real: true,
  },
  {
    catch: function (t) {
      return this.then(undefined, t);
    },
  },
);
if (!i && u(s)) {
  const h = a("Promise").prototype.catch;
  if (f.catch !== h) {
    c(f, "catch", h, {
      unsafe: true,
    });
  }
}
