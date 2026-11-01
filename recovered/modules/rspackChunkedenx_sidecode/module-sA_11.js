import n from "./module-J_12.js";
export default function (r, t) {
  try {
    Object.defineProperty(n, r, {
      value: t,
      configurable: true,
      writable: true,
    });
  } catch (e) {
    n[r] = t;
  }
  return t;
}
