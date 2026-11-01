import n from "./module-O9.js";
const i = n("".replace);
const a = String(Error("zxcasd").stack);
const s = /\n\s*at [^:]*:[^\n]*/;
const u = s.test(a);
export default function (t, r) {
  if (u && typeof t === "string" && !Error.prepareStackTrace) {
    while (r--) {
      t = i(t, s, "");
    }
  }
  return t;
}
