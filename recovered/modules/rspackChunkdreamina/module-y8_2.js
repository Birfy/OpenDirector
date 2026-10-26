import n from "./module-g.js";
import o from "./module-Y.js";
import i from "./module-K.js";
import a from "./module-Lu.js";
import _s from "./module-SY_3.js";
import u from "./module-ef.js";
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
    resolve: function (e) {
      return u(f && this === c ? a : this, e);
    },
  },
);
