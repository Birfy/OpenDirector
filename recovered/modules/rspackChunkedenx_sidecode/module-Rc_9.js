import n from "./module-A_10.js";
const o = Math.PI / 180;
n(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    radians: function (t) {
      return t * o;
    },
  },
);
