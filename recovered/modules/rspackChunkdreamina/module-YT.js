import r from "K8";
import { E } from "./module-WK8.js";
import { a } from "./module-xTw.js";
export var _ = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const i = a(e, t);
  if (!i.ok) {
    return i;
  }
  const o = E(e, t);
  if (o.ok) {
    return r.nj();
  }
  return o;
};
