import n from "Ut";
export function w(e) {
  if (e) {
    const t = new n.DAVideoRefParam();
    t.originHistoryId = e.originHistoryId;
    t.originAgenticHistoryId = e.originAgenticHistoryId;
    t.itemId = e.originItemId;
    return t;
  }
}
export function j(e) {
  let t;
  let i;
  if (e) {
    return {
      originHistoryId:
        (t = e.originHistoryId) == null ? undefined : t.toString(),
      originItemId: (i = e.itemId) == null ? undefined : i.toString(),
    };
  }
}
