import n from "g";
import isDisjointFrom from "sr";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("Aw")("isDisjointFrom"),
  },
  {
    isDisjointFrom,
  },
);
