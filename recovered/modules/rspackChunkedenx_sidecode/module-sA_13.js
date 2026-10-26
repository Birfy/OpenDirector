import n from "./module-J_14.js";
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
