require("./module-A_11.js")(
  {
    target: "Symbol",
    stat: true,
    name: "isWellKnownSymbol",
    forced: true,
  },
  {
    isWellKnown: require("./module-DI_11.js"),
  },
);
