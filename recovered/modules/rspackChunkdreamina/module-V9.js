let toString = Object.prototype.toString;
export function cy(e) {
  return toString.call(e) === "[object Array]";
}
export function Gv(e) {
  return toString.call(e) === "[object Object]";
}
export function Kg(e) {
  return toString.call(e) === "[object String]";
}
export function Et(e) {
  return toString.call(e) === "[object Number]" && e == e;
}
export function b0(e) {
  return e === undefined;
}
export function kZ(e) {
  return e === null;
}
export function hX(e) {
  return e == null;
}
export function Tn(e) {
  return typeof e === "function";
}
export function RI(e) {
  return Gv(e) && Object.keys(e).length === 0;
}
export function W5(e) {
  return (
    Gv(e) &&
    (("$y" in e &&
      "$M" in e &&
      "$D" in e &&
      "$d" in e &&
      "$H" in e &&
      "$m" in e &&
      "$s" in e) ||
      e._isAMomentObject)
  );
}
