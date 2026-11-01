export default !require("./module-X_3.js")(function () {
  const t = function () {}.bind();
  return typeof t !== "function" || t.hasOwnProperty("prototype");
});
