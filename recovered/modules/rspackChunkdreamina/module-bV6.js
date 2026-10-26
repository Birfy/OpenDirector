import { B } from "./module-VFa.js";
export function e(e, t) {
  let r;
  let s;
  let a;
  let n;
  let o;
  let d;
  const c = t.isRegenerate
    ? (o = e.refInfo) == null
      ? undefined
      : o.refRecordInfo
    : undefined;
  const originHistoryId =
    (r = c == null ? undefined : c.refHistoryId) != null
      ? r
      : e.historyRecordId;
  const originItemId =
    (s = (a = c == null ? undefined : c.refItemId) != null ? a : t.itemId) !=
    null
      ? s
      : (d = e.item) == null
        ? undefined
        : d.id;
  if (originHistoryId && originItemId) {
    return {
      originHistoryId,
      originAgenticHistoryId:
        (n = c == null ? undefined : c.refAgenticHistoryId) != null ? n : B(e),
      originItemId,
    };
  }
}
