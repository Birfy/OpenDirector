import n from "./module-A_7.js";
import trimLeft from "./module-vW_6.js";
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
