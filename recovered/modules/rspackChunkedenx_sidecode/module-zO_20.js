import n from "./module-A_21.js";
import o from "./module-YR_20.js";
import i from "./module-N_20.js";
import a from "./module-xl_21.js";
import _s from "./module-FK_20.js";
import c from "./module-kn_21.js";
const _s_CONSTRUCTOR = _s.CONSTRUCTOR;
const u = o("Promise");
const f = i && !_s_CONSTRUCTOR;
n(
  {
    target: "Promise",
    stat: true,
    forced: i || _s_CONSTRUCTOR,
  },
  {
    resolve: function (t) {
      return c(f && this === u ? a : this, t);
    },
  },
);
