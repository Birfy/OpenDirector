import "./module-Mg.js";
import n from "./module-A.js";
import trimEnd from "./module-e8.js";
n(
  {
    target: "String",
    proto: true,
    name: "trimEnd",
    forced: "".trimEnd !== trimEnd,
  },
  {
    trimEnd,
  },
);
