export function D2(e) {
  let t;
  const n = (t = e == null ? undefined : e.batchNumber) != null ? t : 1;
  if (!Number.isFinite(n) || n < 1) {
    return 1;
  }
  return Math.floor(n);
}
Object.defineProperty(exports, "Vd", {
  enumerable: true,
  get: () => 1,
});
Object.defineProperty(exports, "Wu", {
  enumerable: true,
  get: () => 2,
});
Object.defineProperty(exports, "uA", {
  enumerable: true,
  get: () => 2,
});
