export default !require("./module-X_5.js")(function () {
  const t = "9007199254740993";
  const r = JSON.rawJSON(t);
  return !JSON.isRawJSON(r) || JSON.stringify(r) !== t;
});
