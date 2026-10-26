require("./module-A.js")(
  {
    target: "Map",
    proto: true,
    real: true,
    name: "upsert",
    forced: true,
  },
  {
    updateOrInsert: require("./module-bw.js"),
  },
);
