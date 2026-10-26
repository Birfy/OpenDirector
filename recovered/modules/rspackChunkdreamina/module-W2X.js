export default function (t) {
  if (
    (typeof Symbol !== "undefined" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  ) {
    return Array.from(t);
  }
}
