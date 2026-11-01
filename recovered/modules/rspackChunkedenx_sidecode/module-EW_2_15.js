import n from "./module-A_16.js";
import o from "./module-J_16.js";
import _i from "./module-Z6_15.js";
import a from "./module-gD_15.js";
const _i_set = _i.set;
const setImmediate = o.setImmediate ? a(_i_set, false) : _i_set;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: o.setImmediate !== setImmediate,
  },
  {
    setImmediate,
  },
);
