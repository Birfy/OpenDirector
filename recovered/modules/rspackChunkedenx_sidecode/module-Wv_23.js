import n from "./module-A_24.js";
n(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    clamp: function (t, r, e) {
      return Math.min(e, Math.max(r, t));
    },
  },
);
