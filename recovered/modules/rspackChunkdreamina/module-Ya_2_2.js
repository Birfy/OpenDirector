import n from "g";
import union from "xf";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("Aw")("union"),
  },
  {
    union,
  },
);
