import n from "./module-u.js";
export default function (e, t) {
  try {
    Object.defineProperty(n, e, {
      value: t,
      configurable: true,
      writable: true,
    });
  } catch (r) {
    n[e] = t;
  }
  return t;
}
