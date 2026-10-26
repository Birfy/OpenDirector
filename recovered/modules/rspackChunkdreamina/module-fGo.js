import i from "oa";
export var g = "var(--bg-mask-60, rgba(0, 0, 0, 0.6))";
export function S(e, t) {
  const r = "blur(".concat(e, "px)");
  return i._(
    {
      background: g,
      backdropFilter: r,
      WebkitBackdropFilter: r,
    },
    t,
  );
}
