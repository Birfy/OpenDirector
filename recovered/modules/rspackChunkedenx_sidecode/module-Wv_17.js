import n from "./module-A_18.js";
n(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    clamp: function (r, t, e) {
      return Math.min(e, Math.max(t, r));
    },
  },
);
