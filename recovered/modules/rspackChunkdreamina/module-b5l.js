export function S(e, t, i, a) {
  return Number.isInteger(e) && a > 0 && e >= t && e <= i && (e - t) % a == 0;
}
export function G(e, t, i, r, n) {
  if (!Number.isFinite(e)) {
    return t;
  }
  const s = Math.min(Math.max(e != null ? e : t, i), r);
  if (S(s, i, r, n)) {
    return s;
  }
  return t;
}
