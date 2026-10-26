import n from "./module-y_2_10.js";
import _o from "./module-b_10.js";
const _o_get = _o.get;
export default function (t) {
  if (!n(t)) {
    return false;
  }
  const r = _o_get(t);
  return !!r && r.type === "RawJSON";
}
