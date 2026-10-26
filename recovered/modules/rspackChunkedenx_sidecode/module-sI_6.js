import n from "./module-A_7.js";
import o from "./module-N_6.js";
import _a from "./module-FK_6.js";
import i from "./module-xl_7.js";
import s from "./module-YR_6.js";
import c from "./module-Y_7.js";
import u from "./module-vE_6.js";
const _a_CONSTRUCTOR = _a.CONSTRUCTOR;
const f = i && i.prototype;
n(
  {
    target: "Promise",
    proto: true,
    forced: _a_CONSTRUCTOR,
    real: true,
  },
  {
    catch: function (t) {
      return this.then(undefined, t);
    },
  },
);
if (!o && c(i)) {
  const l = s("Promise").prototype.catch;
  if (f.catch !== l) {
    u(f, "catch", l, {
      unsafe: true,
    });
  }
}
