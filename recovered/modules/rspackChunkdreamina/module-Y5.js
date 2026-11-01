import n from "g";
import isSupersetOf from "p0";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: !require("Aw")("isSupersetOf"),
  },
  {
    isSupersetOf,
  },
);
