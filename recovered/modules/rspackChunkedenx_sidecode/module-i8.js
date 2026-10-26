export default require("./module-WH.js")(
  require("./module-yh.js").proto,
  "size",
  "get",
) ||
  function (t) {
    return t.size;
  };
