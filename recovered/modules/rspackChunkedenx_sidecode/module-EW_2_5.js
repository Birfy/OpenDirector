import n from "./module-A_6.js";
import i from "./module-J_6.js";
import _o from "./module-Z6_5.js";
import s from "./module-gD_5.js";
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
