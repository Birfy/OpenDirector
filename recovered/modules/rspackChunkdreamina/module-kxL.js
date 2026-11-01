import n from "./module-Vva.js";
const i = [
  "double",
  "float",
  "int32",
  "uint32",
  "sint32",
  "fixed32",
  "sfixed32",
  "int64",
  "uint64",
  "sint64",
  "fixed64",
  "sfixed64",
  "bool",
  "string",
  "bytes",
];
function o(e, t) {
  let r = 0;
  const n = {};
  for (t |= 0; r < e.length;) {
    n[i[r + t]] = e[r++];
  }
  return n;
}
export const basic = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
export const defaults = o([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  false,
  "",
  n.emptyArray,
  null,
]);
export const long = o([0, 0, 0, 1, 1], 7);
export const mapKey = o([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
export const packed = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
