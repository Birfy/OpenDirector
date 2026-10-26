import n from "./module-A_11.js";
import trimLeft from "./module-vW_10.js";
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
