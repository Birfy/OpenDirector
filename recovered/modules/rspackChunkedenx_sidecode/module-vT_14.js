export default !require("./module-X_13.js")(function () {
  const J = "9007199254740993";
  const Z = JSON.rawJSON(J);
  return !JSON.isRawJSON(Z) || JSON.stringify(Z) !== J;
});
