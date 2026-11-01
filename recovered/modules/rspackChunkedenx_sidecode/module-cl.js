require("./module-A.js")(
  {
    target: "WeakMap",
    stat: true,
    forced: true,
  },
  {
    from: require("./module-rh.js"),
  },
);
