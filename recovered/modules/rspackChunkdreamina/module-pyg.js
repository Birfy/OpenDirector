export function y(e) {
  if (e == null) {
    return undefined;
  }
  return e.metaList
    .filter((e) => e.metaType === "text")
    .map((e) => {
      var t;
      if ((t = e.text) != null) {
        return t;
      }
      return "";
    })
    .join("");
}
