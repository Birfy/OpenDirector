import a from "yMd";
export function K_(e) {
  return (
    !!e &&
    Number.isFinite(e.defaultValue) &&
    Number.isFinite(e.min) &&
    Number.isFinite(e.max) &&
    Number.isFinite(e.step) &&
    e.defaultValue > 0 &&
    e.min > 0 &&
    e.max > 0 &&
    e.step > 0 &&
    e.max >= e.min
  );
}
export function T9(e) {
  return (
    (e == null ? undefined : e.type) === a.pH.LongVideo &&
    !e.disabled &&
    K_(e.durationMsConfig)
  );
}
export function Td(e, t, r) {
  if (!K_(t)) {
    return r;
  }
  const a = Math.min(
    Math.max(Number.isFinite(e) ? e : t.defaultValue, t.min),
    t.max,
  );
  return Math.min(
    Math.max(t.min + Math.round((a - t.min) / t.step) * t.step, t.min),
    t.max,
  );
}
