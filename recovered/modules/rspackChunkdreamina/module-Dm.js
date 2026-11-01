function a(e) {
  throw Error(`lvAssert(${e})`);
}
export function X3(e, t) {
  if (!e) {
    a(t != null ? t : "#expr is false");
  }
}
export function Iv(e) {
  a(e != null ? e : "unreachable code flow");
}
export function DR(e, t = "Illegal value:") {
  a(`${t}: ${e}`);
}
export function F4(e, t) {
  if (e == null) {
    a(t != null ? t : "#val is nil");
  }
}
