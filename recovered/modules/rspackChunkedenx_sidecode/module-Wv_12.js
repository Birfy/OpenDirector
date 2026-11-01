import $ from "./module-A_13.js";
$(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    clamp: function (J, Z, Q) {
      return Math.min(Q, Math.max(Z, J));
    },
  },
);
