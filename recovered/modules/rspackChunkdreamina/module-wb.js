import _i from "bfR";
import { b } from "./module-wnF.js";
export var X = function (e, symbol, r) {
  const i = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
  const o = b(e, r != null ? r : 0);
  const c = _i(o, {
    symbol,
    precision: 2 * !!o.includes("."),
  }).format();
  if (i && 1) {
    return o;
  }
  return c;
};
