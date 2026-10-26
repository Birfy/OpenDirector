import n from "./module-A_22.js";
import trimLeft from "./module-vW_21.js";
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
