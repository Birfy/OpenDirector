require("./module-A.js")(
  {
    target: "WeakMap",
    stat: true,
    forced: true,
  },
  {
    of: require("./module-cn.js"),
  },
);
