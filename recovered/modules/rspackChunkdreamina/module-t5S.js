function a(e, t = 0) {
  return ((t << 5) - t + e) | 0;
}
export function e2(e, t = 0) {
  t = a(149417, t);
  for (let r = 0, { length } = e; r < length; r++) {
    t = a(e.charCodeAt(r), t);
  }
  return t;
}
