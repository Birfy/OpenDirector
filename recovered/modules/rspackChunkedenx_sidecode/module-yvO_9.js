require("./module-A_10.js")(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    upsert: require("./module-bw_9.js"),
  },
);
