import n from "./module-y_2_2.js";
import _i from "./module-b_2.js";
const _i_get = _i.get;
export default function (t) {
  if (!n(t)) {
    return false;
  }
  const r = _i_get(t);
  return !!r && r.type === "RawJSON";
}
