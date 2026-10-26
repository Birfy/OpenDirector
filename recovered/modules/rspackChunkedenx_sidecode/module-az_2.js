import n from "./module-A_3.js";
import trimLeft from "./module-vW_2.js";
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
