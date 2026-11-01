import n from "./module-A_7.js";
import o from "./module-YR_6.js";
import a from "./module-N_6.js";
import i from "./module-xl_7.js";
import _s from "./module-FK_6.js";
import c from "./module-kn_7.js";
const _s_CONSTRUCTOR = _s.CONSTRUCTOR;
const u = o("Promise");
const f = a && !_s_CONSTRUCTOR;
n(
  {
    target: "Promise",
    stat: true,
    forced: a || _s_CONSTRUCTOR,
  },
  {
    resolve: function (t) {
      return c(f && this === u ? i : this, t);
    },
  },
);
