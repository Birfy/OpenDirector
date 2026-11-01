require("./module-A.js")(
  {
    target: "WeakSet",
    stat: true,
    forced: true,
  },
  {
    from: require("./module-rh.js"),
  },
);
