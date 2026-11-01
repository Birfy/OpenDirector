export function $(e, t, r) {
  const i =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  const a = (e / 180) * Math.PI;
  const n = t / Math.abs(i);
  const o = r / Math.abs(i);
  return {
    width: Math.abs(n * Math.cos(-a)) + Math.abs(o * Math.sin(-a)),
    height: Math.abs(n * Math.sin(-a)) + Math.abs(o * Math.cos(-a)),
  };
}
