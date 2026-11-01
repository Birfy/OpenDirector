import n from "./module-A_9.js";
import trimLeft from "./module-vW_8.js";
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
