require("./module-A_11.js")(
  {
    target: "Map",
    proto: true,
    real: true,
    name: "upsert",
    forced: true,
  },
  {
    updateOrInsert: require("./module-bw_10.js"),
  },
);
