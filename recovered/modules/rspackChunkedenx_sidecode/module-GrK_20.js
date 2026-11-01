import n from "./module-A_21.js";
import o from "./module-J_21.js";
import _i from "./module-Z6_20.js";
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
