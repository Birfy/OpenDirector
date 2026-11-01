export function D(e) {
  let t;
  let r;
  if (e.hasLogin) {
    return (
      ((t = e.userId) == null ? undefined : t.trim()) ||
      ((r = e.uniqueId) == null ? undefined : r.trim()) ||
      null
    );
  }
  return null;
}
