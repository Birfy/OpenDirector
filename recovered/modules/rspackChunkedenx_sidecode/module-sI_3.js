import n from "./module-A_4.js";
import i from "./module-N_3.js";
import _o from "./module-FK_3.js";
import s from "./module-xl_4.js";
import a from "./module-YR_3.js";
import u from "./module-Y_4.js";
import c from "./module-vE_3.js";
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
