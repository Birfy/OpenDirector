require("./module-A_10.js")(
  {
    target: "Symbol",
    stat: true,
    name: "isWellKnownSymbol",
    forced: true,
  },
  {
    isWellKnown: require("./module-DI_10.js"),
  },
);
