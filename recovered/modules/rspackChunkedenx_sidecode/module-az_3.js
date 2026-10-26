import n from "./module-A_4.js";
import trimLeft from "./module-vW_3.js";
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
