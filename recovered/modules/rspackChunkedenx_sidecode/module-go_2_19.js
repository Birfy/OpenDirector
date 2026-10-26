require("./module-A_20.js")(
  {
    target: "Math",
    stat: true,
    nonConfigurable: true,
    nonWritable: true,
  },
  {
    RAD_PER_DEG: 180 / Math.PI,
  },
);
