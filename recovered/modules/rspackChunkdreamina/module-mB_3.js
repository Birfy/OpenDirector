require("./module-sg_3.js")(
  "Map",
  function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : undefined);
    };
  },
  require("./module-P6_3.js"),
);
