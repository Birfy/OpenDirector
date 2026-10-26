require("./module-A.js")(
  {
    target: "Function",
    proto: true,
    forced: true,
  },
  {
    demethodize: require("./module-WU.js"),
  },
);
