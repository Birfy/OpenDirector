export function DO(e, t) {
  if (e) {
    if (
      typeof e.expiresAt === "number" &&
      e.expiresAt > 0 &&
      t >= e.expiresAt
    ) {
      return "expired";
    }
    if (e.seatLimitExceeded === true || e.active === true) {
      return "active";
    }
    if (e.active === false) {
      if (e.hadPaid === true) {
        return "expired";
      }
      return "none";
    }
    return "unknown";
  }
  return "unknown";
}
