import n from "g";
import i from "u";
import { clear } from "u1";
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: i.clearImmediate !== clear,
  },
  {
    clearImmediate: clear,
  },
);
