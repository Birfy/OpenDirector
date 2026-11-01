import n from "./module-A_15.js";
import trimLeft from "./module-vW_14.js";
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
