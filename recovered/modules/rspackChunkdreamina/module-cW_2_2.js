import n from "./module-h.js";
export default function (e) {
  return e !== undefined && (n(e, "value") || n(e, "writable"));
}
