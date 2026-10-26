import $ from "./module-A_13.js";
import tt from "./module-X_13.js";
import intersection from "./module-Vt_2_12.js";
$(
  {
    target: "Set",
    proto: true,
    real: true,
    forced:
      !require("./module-U5_12.js")("intersection") ||
      tt(function () {
        return (
          Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))) !== "3,2"
        );
      }),
  },
  {
    intersection,
  },
);
