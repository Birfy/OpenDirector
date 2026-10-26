import n from "./module-A_5.js";
import trimLeft from "./module-vW_4.js";
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
