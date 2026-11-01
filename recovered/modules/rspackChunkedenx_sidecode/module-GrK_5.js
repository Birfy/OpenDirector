import n from "./module-A_6.js";
import i from "./module-J_6.js";
import _o from "./module-Z6_5.js";
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
