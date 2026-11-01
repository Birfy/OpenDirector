import n from "./module-A.js";
import o from "./module-YR.js";
import i from "./module-N.js";
import a from "./module-xl.js";
import _s from "./module-FK.js";
import u from "./module-kn.js";
const _s_CONSTRUCTOR = _s.CONSTRUCTOR;
const c = o("Promise");
const f = i && !_s_CONSTRUCTOR;
n(
  {
    target: "Promise",
    stat: true,
    forced: i || _s_CONSTRUCTOR,
  },
  {
    resolve: function (t) {
      return u(f && this === c ? a : this, t);
    },
  },
);
