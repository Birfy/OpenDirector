const t = new Set();
const n = new Set();
export function $_(e) {
  t.add(e);
  n.forEach((u) => u(e));
}
export function O9(e) {
  return !!t.has(e) && (t.delete(e), true);
}
export function cp(e) {
  n.add(e);
  return () => {
    n.delete(e);
  };
}
