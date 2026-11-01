let t;
export function $4(e) {
  t = e;
}
export function Uh(e) {
  if (t == null) {
    return undefined;
  }
  return t.buildConfirmedContext(e);
}
export function eX(e) {
  if (t != null) {
    t.confirmRecords(e);
  }
}
