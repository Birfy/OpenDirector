import n from "./module-A_9.js";
import i from "./module-J_9.js";
import _o from "./module-Z6_8.js";
import s from "./module-gD_8.js";
const _o_set = _o.set;
const setImmediate = i.setImmediate ? s(_o_set, false) : _o_set;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: i.setImmediate !== setImmediate,
  },
  {
    setImmediate,
  },
);
