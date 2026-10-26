import n from "./module-A.js";
import o from "./module-X.js";
import intersection from "./module-Vt_2.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced:
      !require("./module-U5.js")("intersection") ||
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
