import n from "./module-A.js";
const o = 180 / Math.PI;
n(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    degrees: function (t) {
      return t * o;
    },
  },
);
