import o from "./module-G9.js";
function n(t, e) {
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    if ("value" in n) {
      n.writable = true;
    }
    Object.defineProperty(t, o(n.key), n);
  }
}
export default function (t, e, r) {
  if (e) {
    n(t.prototype, e);
  }
  if (r) {
    n(t, r);
  }
  Object.defineProperty(t, "prototype", {
    writable: false,
  });
  return t;
}
