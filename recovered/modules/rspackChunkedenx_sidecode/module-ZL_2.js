require("./module-A.js")(
  {
    target: "Map",
    stat: true,
    forced: true,
  },
  {
    of: require("./module-cn.js"),
  },
);
