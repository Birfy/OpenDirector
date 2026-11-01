export default require("./module-WH_2.js")(
  require("./module-yh_2.js").proto,
  "size",
  "get",
) ||
  function (t) {
    return t.size;
  };
