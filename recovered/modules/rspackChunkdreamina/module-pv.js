import n from "./module-o.js";
const i = n("".replace);
const a = String(Error("zxcasd").stack);
const s = /\n\s*at [^:]*:[^\n]*/;
const u = s.test(a);
export default function (e, t) {
  if (u && typeof e === "string" && !Error.prepareStackTrace) {
    while (t--) {
      e = i(e, s, "");
    }
  }
  return e;
}
