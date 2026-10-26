import n from "./module-p3.js";
import o from "./module-h.js";
import i from "./module-V8.js";
import a from "./module-qs_2.js";
export default function (e) {
  const e_flags = e.flags;
  if (
    !(
      e_flags === undefined &&
      !("flags" in RegExp.prototype) &&
      !o(e, "flags") &&
      i(RegExp.prototype, e)
    )
  ) {
    return e_flags;
  }
  return n(a, e);
}
