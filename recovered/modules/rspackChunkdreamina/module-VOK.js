export function M(e, t) {
  let i;
  const { materialLimits } = t;
  const o =
    typeof materialLimits === "function" ? materialLimits(e) : materialLimits;
  const duration =
    o == null || (i = o.audio) == null ? undefined : i.maxDuration;
  if (
    e.type === "audio" &&
    typeof duration === "number" &&
    e.duration > duration
  ) {
    const { id, name, url, file, type } = e;
    return {
      id,
      name,
      url,
      file,
      type,
      duration,
    };
  }
  return e;
}
