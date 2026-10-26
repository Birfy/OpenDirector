import n from "./module-A_9.js";
const i = Math.PI / 180;
n(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    radians: function (t) {
      return t * i;
    },
  },
);
