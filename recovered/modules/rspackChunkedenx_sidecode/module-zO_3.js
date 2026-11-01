import n from "./module-A_4.js";
import i from "./module-YR_3.js";
import o from "./module-N_3.js";
import s from "./module-xl_4.js";
import _a from "./module-FK_3.js";
import u from "./module-kn_4.js";
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
