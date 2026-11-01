import n from "./module-O9_5.js";
const o = n("".replace);
const s = String(Error("zxcasd").stack);
const a = /\n\s*at [^:]*:[^\n]*/;
const u = a.test(s);
export default function (t, r) {
  if (u && typeof t === "string" && !Error.prepareStackTrace) {
    while (r--) {
      t = o(t, a, "");
    }
  }
  return t;
}
