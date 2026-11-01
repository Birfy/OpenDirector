require("./module-A.js")(
  {
    target: "Set",
    stat: true,
    forced: true,
  },
  {
    of: require("./module-cn.js"),
  },
);
