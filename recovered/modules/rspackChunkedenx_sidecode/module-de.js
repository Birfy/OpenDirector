import n from "./module-A.js";
import o from "./module-mS.js";
n(
  {
    target: "Array",
    proto: true,
    forced: true,
  },
  {
    uniqueBy: require("./module-qV.js"),
  },
);
o("uniqueBy");
