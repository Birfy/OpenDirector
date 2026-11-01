require("./module-g.js")(
  {
    target: "Object",
    stat: true,
  },
  {
    hasOwn: require("./module-h.js"),
  },
);
