require("./module-A.js")(
  {
    target: "String",
    stat: true,
    forced: true,
  },
  {
    cooked: require("./module-MA_2.js"),
  },
);
