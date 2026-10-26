export default !require("./module-X_10.js")(function () {
  const t = "9007199254740993";
  const e = JSON.rawJSON(t);
  return !JSON.isRawJSON(e) || JSON.stringify(e) !== t;
});
