import n from "./module-A_18.js";
const o = Math.PI / 180;
n(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    radians: function (r) {
      return r * o;
    },
  },
);
