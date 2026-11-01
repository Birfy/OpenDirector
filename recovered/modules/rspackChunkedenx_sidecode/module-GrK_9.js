import n from "./module-A_10.js";
import o from "./module-J_10.js";
import _i from "./module-Z6_9.js";
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
