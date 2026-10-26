import n from "./module-O9_15.js";
const i = n("".replace);
const a = String(Error("zxcasd").stack);
const s = /\n\s*at [^:]*:[^\n]*/;
const u = s.test(a);
export default function (r, t) {
  if (u && typeof r === "string" && !Error.prepareStackTrace) {
    while (t--) {
      r = i(r, s, "");
    }
  }
  return r;
}
