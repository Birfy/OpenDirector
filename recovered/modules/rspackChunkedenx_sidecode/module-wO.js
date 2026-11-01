import n from "./module-y_2.js";
import _o from "./module-b.js";
const _o_get = _o.get;
export default function (t) {
  if (!n(t)) {
    return false;
  }
  const r = _o_get(t);
  return !!r && r.type === "RawJSON";
}
