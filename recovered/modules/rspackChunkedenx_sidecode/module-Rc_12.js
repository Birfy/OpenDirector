import $ from "./module-A_13.js";
const tt = Math.PI / 180;
$(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    radians: function (J) {
      return J * tt;
    },
  },
);
