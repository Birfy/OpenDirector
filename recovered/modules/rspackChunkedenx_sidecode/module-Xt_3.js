import n from "./module-A_4.js";
import i from "./module-X_4.js";
import intersection from "./module-Vt_2_3.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced:
      !require("./module-U5_3.js")("intersection") ||
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
