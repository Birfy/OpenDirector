import n from "./module-A_22.js";
import i from "./module-YR_21.js";
import o from "./module-N_21.js";
import s from "./module-xl_22.js";
import _a from "./module-FK_21.js";
import u from "./module-kn_22.js";
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
