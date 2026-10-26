require("./module-A.js")(
  {
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true,
  },
  {
    upsert: require("./module-bw.js"),
  },
);
