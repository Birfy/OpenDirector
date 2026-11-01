import a from "H26";
export function j(e) {
  const t = e / a.K;
  if (t % 1 == 0) {
    return "".concat(t, "s");
  }
  return "".concat(t.toFixed(1), "s");
}
