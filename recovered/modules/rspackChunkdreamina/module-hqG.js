export function S(e, t) {
  const e_toolExtra = e.toolExtra;
  if (e_toolExtra) {
    if (e_toolExtra instanceof Map) {
      return e_toolExtra.get(t);
    }
    return e_toolExtra[t];
  }
}
