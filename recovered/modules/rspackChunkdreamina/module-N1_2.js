import n from "g";
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
