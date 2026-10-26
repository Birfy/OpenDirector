export default require("./module-J.js")(
  require("./module-Do_2.js").proto,
  "size",
  "get",
) ||
  function (e) {
    return e.size;
  };
