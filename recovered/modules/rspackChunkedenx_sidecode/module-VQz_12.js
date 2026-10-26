import $ from "./module-A_13.js";
const tt = 180 / Math.PI;
$(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    degrees: function (J) {
      return J * tt;
    },
  },
);
