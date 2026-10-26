import n from "./module-O9_9.js";
const i = n("".replace);
const a = String(Error("zxcasd").stack);
const s = /\n\s*at [^:]*:[^\n]*/;
const u = s.test(a);
export default function (t, e) {
  if (u && typeof t === "string" && !Error.prepareStackTrace) {
    while (e--) {
      t = i(t, s, "");
    }
  }
  return t;
}
