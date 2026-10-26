export function V(e) {
  if (!e) {
    return "";
  }
  try {
    let t;
    let r;
    if ((t = (r = JSON.parse(e)) == null ? undefined : r.title) != null) {
      return t;
    }
    return "";
  } catch (e) {
    return "";
  }
}
