import n from "./module-N.js";
import _o from "./module-G_2.js";
const _o_get = _o.get;
export default function (e) {
  if (!n(e)) {
    return false;
  }
  const t = _o_get(e);
  return !!t && t.type === "RawJSON";
}
