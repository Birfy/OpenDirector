import n from "./module-M_2_17.js";
import o from "./module-D_2_17.js";
import i from "./module-e_17.js";
import a from "./module-qN_2_17.js";
export default function (r) {
  const r_flags = r.flags;
  if (
    !(
      r_flags === undefined &&
      !("flags" in RegExp.prototype) &&
      !o(r, "flags") &&
      i(RegExp.prototype, r)
    )
  ) {
    return r_flags;
  }
  return n(a, r);
}
