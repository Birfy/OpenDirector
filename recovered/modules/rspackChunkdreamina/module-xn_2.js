export function A(e) {
  if (typeof e === "string") {
    return e.replace(/\s{2,}/g, (e) => "\xa0".repeat(e.length));
  }
  return e;
}
