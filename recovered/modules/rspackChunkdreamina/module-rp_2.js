export function _(t) {
  if (t && typeof Symbol !== "undefined" && t.constructor === Symbol) {
    return "symbol";
  }
  return typeof t;
}
