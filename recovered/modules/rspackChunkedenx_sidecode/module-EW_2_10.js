import n from "./module-A_11.js";
import o from "./module-J_11.js";
import _i from "./module-Z6_10.js";
import a from "./module-gD_10.js";
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
