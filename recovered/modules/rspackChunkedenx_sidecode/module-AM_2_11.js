require("./module-A_12.js")(
  {
    target: "Symbol",
    stat: true,
    name: "isWellKnownSymbol",
    forced: true,
  },
  {
    isWellKnown: require("./module-DI_12.js"),
  },
);
