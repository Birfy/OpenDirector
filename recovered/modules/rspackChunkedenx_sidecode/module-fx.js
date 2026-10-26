require("./module-A.js")(
  {
    target: "Map",
    stat: true,
    forced: true,
  },
  {
    from: require("./module-rh.js"),
  },
);
