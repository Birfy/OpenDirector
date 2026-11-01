import r from "K8";
import { E } from "./module-WK8.js";
import { p } from "./module-NQ.js";
import { a } from "./module-xTw.js";
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
  const l = p(e, t);
  if (l.ok) {
    return r.nj();
  }
  return l;
};
