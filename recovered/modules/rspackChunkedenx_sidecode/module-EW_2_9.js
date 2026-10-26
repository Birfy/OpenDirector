import n from "./module-A_10.js";
import o from "./module-J_10.js";
import _i from "./module-Z6_9.js";
import a from "./module-gD_9.js";
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
