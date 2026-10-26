import n from "./module-M_2_16.js";
import o from "./module-D_2_16.js";
import i from "./module-e_16.js";
import a from "./module-qN_2_16.js";
export default function (t) {
  const t_flags = t.flags;
  if (
    !(
      t_flags === undefined &&
      !("flags" in RegExp.prototype) &&
      !o(t, "flags") &&
      i(RegExp.prototype, t)
    )
  ) {
    return t_flags;
  }
  return n(a, t);
}
