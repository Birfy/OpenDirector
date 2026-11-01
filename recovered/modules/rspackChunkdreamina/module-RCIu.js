const r = new Set();
const n = new Set();
export function $_(e) {
  r.add(e);
  n.forEach((t) => t(e));
}
export function O9(e) {
  return !!r.has(e) && (r.delete(e), true);
}
export function cp(e) {
  n.add(e);
  return () => {
    n.delete(e);
  };
}
