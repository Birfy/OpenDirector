function s(materialTypes, e) {
  return (
    materialTypes.length === e.length &&
    e.every((e) => materialTypes.includes(e))
  );
}
export function e(t) {
  let e;
  let i;
  const n =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  for (const r of (e = t == null ? undefined : t.allOfConditions) != null
    ? e
    : []) {
    if (s(r.materialTypes, n) && typeof r.maxTotalCount === "number") {
      i =
        typeof i === "number" ? Math.min(i, r.maxTotalCount) : r.maxTotalCount;
    }
  }
  return i;
}
export function x(t, e) {
  let i;
  let n;
  for (const r of (i = t == null ? undefined : t.allOfConditions) != null
    ? i
    : []) {
    if (s(r.materialTypes, [e]) && typeof r.maxTotalDuration === "number") {
      n =
        typeof n === "number"
          ? Math.min(n, r.maxTotalDuration)
          : r.maxTotalDuration;
    }
  }
  return n;
}
