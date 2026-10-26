import n from "./module-O9_23.js";
const i = n("".replace);
const a = String(Error("zxcasd").stack);
const s = /\n\s*at [^:]*:[^\n]*/;
const c = s.test(a);
export default function (t, r) {
  if (c && typeof t === "string" && !Error.prepareStackTrace) {
    while (r--) {
      t = i(t, s, "");
    }
  }
  return t;
}
