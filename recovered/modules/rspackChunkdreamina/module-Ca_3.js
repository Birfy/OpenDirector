import n from "g";
n(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    clamp: function (t, e, r) {
      return Math.min(r, Math.max(e, t));
    },
  },
);
