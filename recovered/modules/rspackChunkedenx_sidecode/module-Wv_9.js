import n from "./module-A_10.js";
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
