export default !require("./module-X_8.js")(function () {
  const r = function () {}.bind();
  return typeof r !== "function" || r.hasOwnProperty("prototype");
});
