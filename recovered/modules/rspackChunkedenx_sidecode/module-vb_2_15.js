export default !require("./module-X_16.js")(function () {
  function r() {}
  r.prototype.constructor = null;
  return Object.getPrototypeOf(new r()) !== r.prototype;
});
