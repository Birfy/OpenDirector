require("./module-A.js")(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    upsert: require("./module-bw.js"),
  },
);
