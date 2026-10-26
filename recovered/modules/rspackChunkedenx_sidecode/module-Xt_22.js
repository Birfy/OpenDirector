import n from "./module-A_23.js";
import i from "./module-X_23.js";
import intersection from "./module-Vt_2_22.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced:
      !require("./module-U5_22.js")("intersection") ||
      i(function () {
        return (
          Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))) !== "3,2"
        );
      }),
  },
  {
    intersection,
  },
);
