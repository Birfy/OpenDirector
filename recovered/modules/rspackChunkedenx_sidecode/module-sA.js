import n from "./module-J.js";
export default function (t, r) {
  try {
    Object.defineProperty(n, t, {
      value: r,
      configurable: true,
      writable: true,
    });
  } catch (e) {
    n[t] = r;
  }
  return r;
}
