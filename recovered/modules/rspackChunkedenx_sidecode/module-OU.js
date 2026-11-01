require("./module-A.js")(
  {
    target: "Iterator",
    name: "indexed",
    proto: true,
    real: true,
    forced: true,
  },
  {
    asIndexedPairs: require("./module-up9.js"),
  },
);
