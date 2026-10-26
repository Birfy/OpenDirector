export function Y(e, t) {
  if (t.endsWith("/*")) {
    return e.startsWith(t.slice(0, -1));
  }
  return e === t;
}
