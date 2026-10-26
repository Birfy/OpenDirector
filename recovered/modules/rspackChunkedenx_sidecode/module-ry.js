require("./module-A.js")(
  {
    target: "Set",
    stat: true,
    forced: true,
  },
  {
    from: require("./module-rh.js"),
  },
);
