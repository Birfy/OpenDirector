export default !require("./module-X_12.js")(function () {
  const r = function () {}.bind();
  return typeof r !== "function" || r.hasOwnProperty("prototype");
});
