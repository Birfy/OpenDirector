import n from "g";
import i from "u";
import { set } from "u1";
import o from "oG";
const setImmediate = i.setImmediate ? o(set, false) : set;
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
