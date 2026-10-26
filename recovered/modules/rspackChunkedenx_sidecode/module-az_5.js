import n from "./module-A_6.js";
import trimLeft from "./module-vW_5.js";
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
