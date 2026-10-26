import n from "./module-y_2_9.js";
import _o from "./module-b_9.js";
const _o_get = _o.get;
export default function (t) {
  if (!n(t)) {
    return false;
  }
  const e = _o_get(t);
  return !!e && e.type === "RawJSON";
}
