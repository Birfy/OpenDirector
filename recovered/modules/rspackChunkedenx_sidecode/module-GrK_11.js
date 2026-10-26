import n from "./module-A_12.js";
import o from "./module-J_12.js";
import _i from "./module-Z6_11.js";
const _i_clear = _i.clear;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: o.clearImmediate !== _i_clear,
  },
  {
    clearImmediate: _i_clear,
  },
);
