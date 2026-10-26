export function G(e) {
  if (typeof e !== "string" || !e) {
    throw Error("invalid dataURL");
  }
  let t;
  let n;
  const i = e.split(",");
  for (
    var r = atob(i[1]),
      a = (n = i[0]) == null ? undefined : n.match(/:(.*?);/),
      type = (t = a == null ? undefined : a[1]) != null ? t : "",
      l = new Uint8Array(r.length),
      u = 0;
    u < r.length;
    u++
  ) {
    l[u] = r.charCodeAt(u);
  }
  return new Blob([l], {
    type,
  });
}
