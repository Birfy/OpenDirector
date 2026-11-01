require("./module-A.js")(
  {
    target: "Function",
    proto: true,
    forced: true,
    name: "demethodize",
  },
  {
    unThis: require("./module-WU.js"),
  },
);
