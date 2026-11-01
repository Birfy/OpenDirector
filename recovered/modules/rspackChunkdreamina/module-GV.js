export function A(t) {
  return (A =
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
        })(t);
}
