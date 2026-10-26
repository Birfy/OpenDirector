export function $(e, t, a, i, r) {
  const n = e / t;
  let o = Math.min(Math.sqrt(r / n) * n, i * n, i);
  let s = o / n;
  if (s > i) {
    o = (s = i) * n;
  }
  if (o < a) {
    s = (o = a) / n;
  }
  if (s < a && (o = (s = a) * n) < a) {
    o = a;
  }
  return {
    width: Math.floor(Math.min(o, i)),
    height: Math.floor(Math.min(s, i)),
  };
}
