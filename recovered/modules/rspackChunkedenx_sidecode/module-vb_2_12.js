export default !require("./module-X_13.js")(function () {
  function J() {}
  J.prototype.constructor = null;
  return Object.getPrototypeOf(new J()) !== J.prototype;
});
