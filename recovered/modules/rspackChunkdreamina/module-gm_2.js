export function H(assetType, assetId, i) {
  if (i == null ? undefined : i.length) {
    return i.map((i, itemIndex) => {
      var s;
      var n;
      var o;
      var a;
      return {
        assetType,
        assetId,
        itemId:
          (s =
            (n = i.id) != null
              ? n
              : (o = i.commonAttr) == null
                ? undefined
                : o.id) != null
            ? s
            : (a = i.common_attr) == null
              ? undefined
              : a.id,
        itemIndex,
      };
    });
  }
}
