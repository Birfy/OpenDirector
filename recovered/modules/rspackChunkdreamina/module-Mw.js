import i from "MK";
export function B(e) {
  let t;
  return (
    (t = e == null ? undefined : e.toLowerCase().startsWith("en")) != null && t
  );
}
export function k() {
  if (i.Ay.language) {
    return i.Ay.language;
  }
  const e =
    typeof document === "undefined" ? undefined : document.documentElement.lang;
  if (e) {
    return e;
  }
  const t = typeof navigator === "undefined" ? undefined : navigator.language;
  if (t) {
    return t;
  }
}
