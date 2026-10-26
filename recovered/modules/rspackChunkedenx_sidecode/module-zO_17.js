import n from "./module-A_18.js";
import o from "./module-YR_17.js";
import i from "./module-N_17.js";
import a from "./module-xl_18.js";
import _s from "./module-FK_17.js";
import u from "./module-kn_18.js";
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
