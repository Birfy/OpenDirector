import n from "./module-A_8.js";
import o from "./module-J_8.js";
import _i from "./module-Z6_7.js";
import a from "./module-gD_7.js";
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
