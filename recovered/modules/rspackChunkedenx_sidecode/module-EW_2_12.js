import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import _te from "./module-Z6_12.js";
import tr from "./module-gD_12.js";
const _te_set = _te.set;
const setImmediate = tt.setImmediate ? tr(_te_set, false) : _te_set;
$(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: tt.setImmediate !== setImmediate,
  },
  {
    setImmediate,
  },
);
