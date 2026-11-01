import r from "K8";
import { p } from "./module-NQ_2.js";
import { a as a_1 } from "./module-xTw_2.js";
export var N = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const i = a_1(e, t);
  if (!i.ok) {
    return i;
  }
  const a = p(e, t);
  if (a.ok) {
    return r.nj();
  }
  return a;
};
