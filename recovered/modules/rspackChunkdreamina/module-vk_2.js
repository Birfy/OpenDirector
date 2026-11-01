import n from "g";
import i from "VV";
import intersection from "eq";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced:
      !require("Aw")("intersection") ||
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
