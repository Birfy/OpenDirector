require("./module-A.js")(
  {
    target: "Array",
    stat: true,
  },
  {
    fromAsync: require("./module-sey.js"),
  },
);
