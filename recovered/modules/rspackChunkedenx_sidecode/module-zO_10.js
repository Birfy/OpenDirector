import n from "./module-A_11.js";
import o from "./module-YR_10.js";
import i from "./module-N_10.js";
import a from "./module-xl_11.js";
import _s from "./module-FK_10.js";
import u from "./module-kn_11.js";
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
