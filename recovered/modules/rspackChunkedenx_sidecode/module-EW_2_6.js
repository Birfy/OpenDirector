import n from "./module-A_7.js";
import o from "./module-J_7.js";
import _a from "./module-Z6_6.js";
import i from "./module-gD_6.js";
const _a_set = _a.set;
const setImmediate = o.setImmediate ? i(_a_set, false) : _a_set;
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
