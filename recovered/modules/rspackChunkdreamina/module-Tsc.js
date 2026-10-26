import n from "g";
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
