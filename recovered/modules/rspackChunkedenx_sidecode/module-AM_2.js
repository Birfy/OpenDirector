require("./module-A.js")(
  {
    target: "Symbol",
    stat: true,
    name: "isWellKnownSymbol",
    forced: true,
  },
  {
    isWellKnown: require("./module-DI.js"),
  },
);
