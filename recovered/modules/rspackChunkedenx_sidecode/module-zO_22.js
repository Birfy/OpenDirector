import n from "./module-A_23.js";
import i from "./module-YR_22.js";
import o from "./module-N_22.js";
import s from "./module-xl_23.js";
import _a from "./module-FK_22.js";
import u from "./module-kn_23.js";
const _a_CONSTRUCTOR = _a.CONSTRUCTOR;
const c = i("Promise");
const f = o && !_a_CONSTRUCTOR;
n(
  {
    target: "Promise",
    stat: true,
    forced: o || _a_CONSTRUCTOR,
  },
  {
    resolve: function (t) {
      return u(f && this === c ? s : this, t);
    },
  },
);
