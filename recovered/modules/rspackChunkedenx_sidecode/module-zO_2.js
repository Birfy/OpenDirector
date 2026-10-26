import n from "./module-A_3.js";
import i from "./module-YR_2.js";
import o from "./module-N_2.js";
import s from "./module-xl_3.js";
import _a from "./module-FK_2.js";
import u from "./module-kn_3.js";
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
