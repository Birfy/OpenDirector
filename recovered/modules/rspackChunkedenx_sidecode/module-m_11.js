export default !require("./module-X_11.js")(function () {
  const t = function () {}.bind();
  return typeof t !== "function" || t.hasOwnProperty("prototype");
});
