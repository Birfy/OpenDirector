"use strict";
require("./module-A_4.js")(
  {
    target: "Symbol",
    stat: true,
    name: "isWellKnownSymbol",
    forced: true,
  },
  {
    isWellKnown: require("./module-DI_4.js"),
  },
);
