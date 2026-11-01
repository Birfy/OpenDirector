import { A } from "./module-hg.js";
function n(t, e, r) {
  if ((e = A(e)) in t) {
    Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    t[e] = r;
  }
  return t;
}
export { n as A };
