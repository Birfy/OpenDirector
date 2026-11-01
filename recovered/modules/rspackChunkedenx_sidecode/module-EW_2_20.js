import n from "./module-A_21.js";
import o from "./module-J_21.js";
import _i from "./module-Z6_20.js";
import a from "./module-gD_20.js";
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
