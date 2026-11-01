import n from "./module-A_8.js";
import trimLeft from "./module-vW_7.js";
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
