import n from "./module-A_22.js";
import i from "./module-J_22.js";
import _o from "./module-Z6_21.js";
const _o_clear = _o.clear;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: i.clearImmediate !== _o_clear,
  },
  {
    clearImmediate: _o_clear,
  },
);
