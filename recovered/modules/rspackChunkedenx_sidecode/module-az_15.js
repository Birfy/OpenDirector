import n from "./module-A_16.js";
import trimLeft from "./module-vW_15.js";
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
