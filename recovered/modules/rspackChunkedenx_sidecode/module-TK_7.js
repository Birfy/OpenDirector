import n from "./module-M_2_6.js";
import o from "./module-D_2_6.js";
import a from "./module-e_6.js";
import i from "./module-qN_2_6.js";
export default function (t) {
  const t_flags = t.flags;
  if (
    !(
      t_flags === undefined &&
      !("flags" in RegExp.prototype) &&
      !o(t, "flags") &&
      a(RegExp.prototype, t)
    )
  ) {
    return t_flags;
  }
  return n(i, t);
}
