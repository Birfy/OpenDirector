import n from "./module-A_18.js";
import trimLeft from "./module-vW_17.js";
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
