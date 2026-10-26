import n from "./module-A_7.js";
import o from "./module-X_7.js";
import intersection from "./module-Vt_2_6.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced:
      !require("./module-U5_6.js")("intersection") ||
      o(function () {
        return (
          Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))) !== "3,2"
        );
      }),
  },
  {
    intersection,
  },
);
