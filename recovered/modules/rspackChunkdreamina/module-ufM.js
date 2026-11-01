export function Zu(e) {
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
export function wo(e) {
  let t;
  let i;
  if (
    (t =
      (i = e.itemList) == null
        ? undefined
        : i.map((e) => Zu(e)).filter((e) => !!e)) != null
  ) {
    return t;
  }
  return [];
}
export function c4(e, t) {
  let i;
  let r;
  const s = (i = e.assetOption) == null ? undefined : i.favoriteItemIdList;
  if (t.length > 0 && (s == null ? undefined : s.length)) {
    return t.some((e) => s.includes(e));
  }
  return (
    (s == null || !s.length) &&
    !!((r = e.assetOption) == null ? undefined : r.hasFavorited)
  );
}
export function GC(e, t) {
  return c4(e, t ? [t] : []);
}
export function D5(e) {
  return c4(e, wo(e));
}
