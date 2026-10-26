export function d(e) {
  let t;
  const { materialLimits } = e;
  if (materialLimits && typeof materialLimits !== "function") {
    const { minDuration = 0, maxDuration } =
      (t = materialLimits.audio) != null ? t : {};
    if (typeof maxDuration === "number") {
      return {
        minDuration,
        maxDuration,
      };
    }
  }
}
