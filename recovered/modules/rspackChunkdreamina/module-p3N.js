export function w(e) {
  if (e.billingMode === "per_100_chars") {
    return e.chargeUnits;
  }
  return e.amount || 1;
}
