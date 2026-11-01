export function J(e) {
  let t;
  let r;
  let i;
  if (
    (t =
      (r = (i = e.vipPriceList) != null ? i : e.allPriceList) != null
        ? r
        : e.priceList) != null
  ) {
    return t;
  }
  return [];
}
