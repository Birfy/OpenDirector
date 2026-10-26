function n(e) {
  if (typeof e === "number" && Number.isFinite(e) && !(e <= 0)) {
    if (e > 100000000000) {
      return e;
    }
    return 1000 * e;
  }
}
export function D(e) {
  if (Array.isArray(e)) {
    return e.flatMap((e) => {
      var e_memberLimit = e.memberLimit;
      var beginTimeMs = n(e.beginTime);
      var endTimeMs = n(e.endTime);
      if (
        typeof e_memberLimit !== "number" ||
        !Number.isInteger(e_memberLimit) ||
        e_memberLimit <= 0 ||
        beginTimeMs === undefined ||
        endTimeMs === undefined ||
        beginTimeMs > endTimeMs
      ) {
        return [];
      }
      return [
        {
          seatCount: e_memberLimit,
          beginTimeMs,
          endTimeMs,
        },
      ];
    });
  }
  return [];
}
