"use strict";
require("./module-A_3.js")(
  {
    target: "Symbol",
    stat: true,
    forced: true,
  },
  {
    isWellKnownSymbol: require("./module-DI_3.js"),
  },
);
