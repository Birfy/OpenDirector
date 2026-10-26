require("./module-A.js")(
  {
    target: "Symbol",
    stat: true,
    forced: true,
  },
  {
    isWellKnownSymbol: require("./module-DI.js"),
  },
);
