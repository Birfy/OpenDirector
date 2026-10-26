export function d(e) {
  let t;
  let i;
  if (
    (t =
      (i = e.preGenItemIds) == null
        ? undefined
        : i.map((e) => String(e).trim())) != null
  ) {
    return t;
  }
  return [];
}
export function T(e) {
  let t;
  let i;
  if (
    (i =
      (t = e.preGenItemList) == null
        ? undefined
        : t.map((e) => String(e).trim()).filter((e) => e.length > 0)) != null
  ) {
    return i;
  }
  return [];
}
