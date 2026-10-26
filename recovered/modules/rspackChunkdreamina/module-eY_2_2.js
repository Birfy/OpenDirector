import n from "./module-g.js";
import o from "./module-K.js";
import _i from "./module-SY_3.js";
import a from "./module-Lu.js";
import s from "./module-Y.js";
import u from "./module-r.js";
import c from "./module-xX_2.js";
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
    catch: function (e) {
      return this.then(undefined, e);
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
