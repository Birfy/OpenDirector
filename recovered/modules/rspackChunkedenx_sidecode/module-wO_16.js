import n from "./module-y_2_15.js";
import _o from "./module-b_15.js";
const _o_get = _o.get;
export default function (r) {
  if (!n(r)) {
    return false;
  }
  const t = _o_get(r);
  return !!t && t.type === "RawJSON";
}
