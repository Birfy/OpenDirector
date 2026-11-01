import n from "./module-A_23.js";
import trimLeft from "./module-vW_22.js";
n(
  {
    target: "String",
    proto: true,
    name: "trimStart",
    forced: trimLeft !== undefined,
  },
  {
    trimLeft,
  },
);
