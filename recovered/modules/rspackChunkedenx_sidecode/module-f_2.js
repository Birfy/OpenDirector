require("./module-A.js")(
  {
    target: "Object",
    stat: true,
  },
  {
    hasOwn: require("./module-D_2.js"),
  },
);
