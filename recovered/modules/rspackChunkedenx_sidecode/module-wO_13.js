import $ from "./module-y_2_12.js";
import _tt from "./module-b_12.js";
const _tt_get = _tt.get;
export default function (J) {
  if (!$(J)) {
    return false;
  }
  const Z = _tt_get(J);
  return !!Z && Z.type === "RawJSON";
}
