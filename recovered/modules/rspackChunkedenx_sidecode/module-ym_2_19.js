require("./module-A_20.js")(
  {
    target: "Map",
    proto: true,
    real: true,
    name: "upsert",
    forced: true,
  },
  {
    updateOrInsert: require("./module-bw_19.js"),
  },
);
