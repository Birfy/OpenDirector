import i from "hef";
export function M(e) {
  if (e) {
    const t = i.W(e);
    if (t == null) {
      return undefined;
    }
    return t.imageUri;
  }
}
