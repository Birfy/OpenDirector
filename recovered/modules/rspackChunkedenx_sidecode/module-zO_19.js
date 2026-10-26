import n from "./module-A_20.js";
import o from "./module-YR_19.js";
import i from "./module-N_19.js";
import a from "./module-xl_20.js";
import _s from "./module-FK_19.js";
import u from "./module-kn_20.js";
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
    resolve: function (r) {
      return u(f && this === c ? a : this, r);
    },
  },
);
