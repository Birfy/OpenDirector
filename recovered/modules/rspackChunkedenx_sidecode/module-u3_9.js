require("./module-A_10.js")(
  {
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true,
  },
  {
    upsert: require("./module-bw_9.js"),
  },
);
