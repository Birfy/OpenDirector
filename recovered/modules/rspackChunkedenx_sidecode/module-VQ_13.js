import $ from "./module-O9_12.js";
const te = $("".replace);
const tr = String(Error("zxcasd").stack);
const tn = /\n\s*at [^:]*:[^\n]*/;
const ti = tn.test(tr);
export default function (J, Z) {
  if (ti && typeof J === "string" && !Error.prepareStackTrace) {
    while (Z--) {
      J = te(J, tn, "");
    }
  }
  return J;
}
