import n from "./module-M_2_21.js";
import i from "./module-D_2_21.js";
import o from "./module-e_21.js";
import s from "./module-qN_2_21.js";
export default function (t) {
  const t_flags = t.flags;
  if (
    !(
      t_flags === undefined &&
      !("flags" in RegExp.prototype) &&
      !i(t, "flags") &&
      o(RegExp.prototype, t)
    )
  ) {
    return t_flags;
  }
  return n(s, t);
}
