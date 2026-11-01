export default !require("./module-X_10.js")(function () {
  const t = function () {}.bind();
  return typeof t !== "function" || t.hasOwnProperty("prototype");
});
