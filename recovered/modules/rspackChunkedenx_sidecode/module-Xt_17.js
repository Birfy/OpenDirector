import n from "./module-A_18.js";
import o from "./module-X_18.js";
import intersection from "./module-Vt_2_17.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced:
      !require("./module-U5_17.js")("intersection") ||
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
