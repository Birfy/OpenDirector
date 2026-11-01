export function QT(e) {
  let t;
  let i;
  let r;
  let s;
  if (
    (t =
      (i = e == null ? undefined : e.id) != null
        ? i
        : e == null || (r = e.commonAttr) == null
          ? undefined
          : r.id) != null
  ) {
    return t;
  }
  if (e == null || (s = e.common_attr) == null) {
    return undefined;
  }
  return s.id;
}
export function mZ(e) {
  let t;
  let i;
  if (
    (t = e == null || (i = e.common_attr) == null ? undefined : i.id) != null
  ) {
    return t;
  }
  return QT(e);
}
export function Dt(e, t, i, s) {
  if (
    ((a = t.itemLocator) == null ? undefined : a.assetType) === s &&
    t.itemLocator.itemId
  ) {
    return [t.itemLocator.itemId];
  }
  let n;
  let o;
  var a;
  let u;
  const l =
    (n =
      i == null
        ? undefined
        : i
            .filter((e) => e.assetType === s)
            .map((e) => e.itemId)
            .filter((e) => !!e)) != null
      ? n
      : [];
  if (l.length) {
    return l;
  }
  if (
    (o =
      e == null || (u = e.itemList) == null
        ? undefined
        : u.map((e) => QT(e)).filter((e) => !!e)) != null
  ) {
    return o;
  }
  return [];
}
