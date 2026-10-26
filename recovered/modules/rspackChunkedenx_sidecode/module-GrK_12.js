import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import _te from "./module-Z6_12.js";
const _te_clear = _te.clear;
$(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: tt.clearImmediate !== _te_clear,
  },
  {
    clearImmediate: _te_clear,
  },
);
