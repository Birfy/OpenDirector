import n from "./module-A_5.js";
import i from "./module-N_4.js";
import _o from "./module-FK_4.js";
import s from "./module-xl_5.js";
import a from "./module-YR_4.js";
import u from "./module-Y_5.js";
import c from "./module-vE_4.js";
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
