function e(r) {
  e =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          if (
            t &&
            typeof Symbol === "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
          ) {
            return "symbol";
          }
          return typeof t;
        };
  e.default = e;
  return e(r);
}
export { e as default };
e.default = e;
