"use strict";
require("g")(
  {
    target: "Symbol",
    stat: true,
    forced: true,
  },
  {
    isWellKnownSymbol: require("C8"),
  },
);
