require("./module-A.js")(
  {
    target: "WeakSet",
    stat: true,
    forced: true,
  },
  {
    of: require("./module-cn.js"),
  },
);
