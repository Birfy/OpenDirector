export default require("./module-WH_17.js")(
  require("./module-yh_17.js").proto,
  "size",
  "get",
) ||
  function (r) {
    return r.size;
  };
