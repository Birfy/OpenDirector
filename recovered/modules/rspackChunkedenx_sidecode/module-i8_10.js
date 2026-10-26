export default require("./module-WH_10.js")(
  require("./module-yh_10.js").proto,
  "size",
  "get",
) ||
  function (t) {
    return t.size;
  };
