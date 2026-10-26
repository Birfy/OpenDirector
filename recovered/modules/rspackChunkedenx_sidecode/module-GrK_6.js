import n from "./module-A_7.js";
import o from "./module-J_7.js";
import _a from "./module-Z6_6.js";
const _a_clear = _a.clear;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: o.clearImmediate !== _a_clear,
  },
  {
    clearImmediate: _a_clear,
  },
);
