import i from "Rb";
export function d(e, t) {
  let r;
  const { originHistoryId, itemId, isRegenerate, originAgenticHistoryId } = t;
  const d = e.itemList.find((e) => e.id === itemId);
  const c = d == null || (r = d.image.largeImages) == null ? undefined : r[0];
  if (isRegenerate) {
    return e.refInfo;
  }
  return {
    refType: i.DMLAigcDataRefType.History,
    refRecordInfo: {
      refHistoryId: originHistoryId,
      refAgenticHistoryId: originAgenticHistoryId,
      refItemId: itemId,
      refItemInfo: {
        imageUrl: d == null ? undefined : d.commonAttr.coverUrl,
        uri: c == null ? undefined : c.imageUri,
        width: c == null ? undefined : c.width,
        height: c == null ? undefined : c.height,
      },
    },
  };
}
