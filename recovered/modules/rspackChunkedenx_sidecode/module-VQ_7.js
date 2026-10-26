import n from "./module-O9_6.js";
const a = n("".replace);
const i = String(Error("zxcasd").stack);
const s = /\n\s*at [^:]*:[^\n]*/;
const c = s.test(i);
export default function (t, r) {
  if (c && typeof t === "string" && !Error.prepareStackTrace) {
    while (r--) {
      t = a(t, s, "");
    }
  }
  return t;
}
