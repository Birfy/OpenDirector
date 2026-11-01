import n from "./module-A_4.js";
const i = 180 / Math.PI;
n(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    degrees: function (t) {
      return t * i;
    },
  },
);
