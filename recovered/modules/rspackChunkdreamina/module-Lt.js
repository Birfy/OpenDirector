export function f(e) {
  return e === "mainFrame2026" || e === "mainFrame2026Oversea";
}
export function G(e) {
  const { appearance, variant, collapsed } = e;
  return (
    appearance === "mainFrame2026Oversea" && variant !== "canvas" && !collapsed
  );
}
