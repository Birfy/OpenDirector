export function y(e) {
  try {
    let t;
    let i;
    const n =
      (i = e.userMessage) == null || (t = i.metadata) == null
        ? undefined
        : t.metricsExtra;
    if (!n) {
      return {};
    }
    return JSON.parse(n);
  } catch (e) {
    return {};
  }
}
