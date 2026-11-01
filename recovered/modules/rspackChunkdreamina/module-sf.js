import o from "eZ";
export function A(t, e) {
  if (typeof e !== "function" && e !== null) {
    throw TypeError("Super expression must either be null or a function");
  }
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true,
    },
  });
  Object.defineProperty(t, "prototype", {
    writable: false,
  });
  if (e) {
    o.A(t, e);
  }
}
