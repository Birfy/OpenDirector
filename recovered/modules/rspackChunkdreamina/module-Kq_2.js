import n from "Ut";
export function I(e) {
  const t = new n.DACommonAssetResource();
  t.assetType = e.assetType;
  t.assetCode = e.assetCode;
  return t;
}
export function B(e, t) {
  let i;
  let n;
  let a;
  const referImageList =
    (i =
      t == null ||
      (a = t.find((t) => t.key === e.assetCode)) == null ||
      (n = a.assetInfo) == null
        ? undefined
        : n.referImageList) != null
      ? i
      : [];
  return {
    assetType: e.assetType,
    assetCode: e.assetCode,
    referImageList,
  };
}
