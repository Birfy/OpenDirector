export function B(e) {
  let t;
  let r;
  let i;
  if ((t = e.idModel.agentHistoryId) != null) {
    return t;
  }
  if ((i = e.refInfo) == null || (r = i.refRecordInfo) == null) {
    return undefined;
  }
  return r.refAgenticHistoryId;
}
