import n from "./module-A_14.js";
const o = 180 / Math.PI;
n(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    degrees: function (r) {
      return r * o;
    },
  },
);
