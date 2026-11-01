import { A } from "./module-hg.js";
function n(t, e) {
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    if ("value" in n) {
      n.writable = true;
    }
    Object.defineProperty(t, A(n.key), n);
  }
}
function i(t, e, r) {
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
export { i as A };
