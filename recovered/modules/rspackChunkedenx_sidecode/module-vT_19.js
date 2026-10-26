export default !require("./module-X_18.js")(function () {
  const r = "9007199254740993";
  const t = JSON.rawJSON(r);
  return !JSON.isRawJSON(t) || JSON.stringify(t) !== r;
});
