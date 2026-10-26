import o from "./module-G9.js";
export default function (t, e, r) {
  if ((e = o(e)) in t) {
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
