import r from "K8";
import { E } from "./module-WK8_2.js";
import { p } from "./module-NQ_2.js";
import { a } from "./module-xTw_2.js";
export var i = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const i = a(e, t);
  if (!i.ok) {
    return i;
  }
  const s = E(e, t);
  if (!s.ok) {
    return s;
  }
  const c = p(e, t);
  if (c.ok) {
    return r.nj();
  }
  return c;
};
