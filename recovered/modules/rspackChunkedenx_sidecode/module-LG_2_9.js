require("./module-A_10.js")(
  {
    target: "Symbol",
    stat: true,
    forced: true,
  },
  {
    isWellKnownSymbol: require("./module-DI_10.js"),
  },
);
