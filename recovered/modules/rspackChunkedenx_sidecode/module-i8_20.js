export default require("./module-WH_20.js")(
  require("./module-yh_20.js").proto,
  "size",
  "get",
) ||
  function (t) {
    return t.size;
  };
