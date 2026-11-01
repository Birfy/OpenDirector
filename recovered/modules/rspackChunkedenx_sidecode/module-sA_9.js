import n from "./module-J_10.js";
export default function (t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      configurable: true,
      writable: true,
    });
  } catch (r) {
    n[t] = e;
  }
  return e;
}
