require("./module-A.js")(
  {
    target: "AsyncIterator",
    name: "indexed",
    proto: true,
    real: true,
    forced: true,
  },
  {
    asIndexedPairs: require("./module-hY.js"),
  },
);
