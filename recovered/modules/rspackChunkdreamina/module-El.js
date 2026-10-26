import o from "./module-FyS.js";
export default function (t, e) {
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
    o(t, e);
  }
}
