const toString = Object.prototype.toString;
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
export function Lm(e) {
  return typeof e === "boolean";
}
