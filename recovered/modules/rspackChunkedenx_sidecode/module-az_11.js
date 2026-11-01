import n from "./module-A_12.js";
import trimLeft from "./module-vW_11.js";
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
