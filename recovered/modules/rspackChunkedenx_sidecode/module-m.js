export default !require("./module-X.js")(function () {
  const t = function () {}.bind();
  return typeof t !== "function" || t.hasOwnProperty("prototype");
});
