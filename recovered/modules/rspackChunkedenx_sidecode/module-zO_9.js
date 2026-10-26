import n from "./module-A_10.js";
import o from "./module-YR_9.js";
import i from "./module-N_9.js";
import a from "./module-xl_10.js";
import _s from "./module-FK_9.js";
import u from "./module-kn_10.js";
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
