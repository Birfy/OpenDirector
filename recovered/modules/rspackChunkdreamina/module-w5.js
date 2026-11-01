import n from "g";
import isSubsetOf from "Fs";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("Aw")("isSubsetOf"),
  },
  {
    isSubsetOf,
  },
);
