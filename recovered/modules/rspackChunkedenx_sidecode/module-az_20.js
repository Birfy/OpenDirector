import n from "./module-A_21.js";
import trimLeft from "./module-vW_20.js";
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
