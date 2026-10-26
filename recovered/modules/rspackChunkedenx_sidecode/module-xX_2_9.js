require("./module-A_10.js")(
  {
    target: "Math",
    stat: true,
    nonConfigurable: true,
    nonWritable: true,
  },
  {
    DEG_PER_RAD: Math.PI / 180,
  },
);
