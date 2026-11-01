require("./module-A.js")(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: true,
  },
  {
    indexed: require("./module-up9.js"),
  },
);
