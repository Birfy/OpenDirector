import { U, k } from "./module-N2.js";
const n = "dreamina_create_tab";
export var UV = "createTab";
export var Y3 = ["chat", "canvas"];
function s(e) {
  return Y3.some((t) => t === e);
}
export function VX(e) {
  const t = new URLSearchParams(e).get(UV);
  if (s(t)) {
    return t;
  }
}
export function tv(e) {
  const t = k(e, n);
  if (s(t)) {
    return t;
  }
}
export function LO(e) {
  const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  return U(n, e, t);
}
