import a from "r6q";
import r from "BTP";
export function Q(e, t) {
  let n;
  const durationValues = [
    ...new Set(
      e
        .filter((e) => !e.disabled)
        .map((e) => Math.round(e.value / a.K))
        .filter((e) => Number.isFinite(e)),
    ),
  ].sort((e, t) => e - t);
  const i = Math.round(t / a.K);
  const selectedDurationSeconds = durationValues.length
    ? r.D(i, durationValues)
    : i;
  return {
    durationValues,
    selectedDurationSeconds,
    minDurationSeconds:
      (n = durationValues[0]) != null ? n : selectedDurationSeconds,
    maxDurationSeconds:
      durationValues.length > 0
        ? durationValues[durationValues.length - 1]
        : selectedDurationSeconds,
    durationStepSeconds: ((e) => {
      if (e.length <= 1) {
        return 1;
      }
      const t = e.reduce((acc, item, index) => {
        var r = e[index + 1];
        if (typeof r !== "number") {
          return acc;
        }
        var o = r - item;
        if (o > 0) {
          return Math.min(acc, o);
        }
        return acc;
      }, Infinity);
      if (Number.isFinite(t)) {
        return t;
      }
      return 1;
    })(durationValues),
  };
}
