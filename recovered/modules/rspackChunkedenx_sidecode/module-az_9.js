import n from "./module-A_10.js";
import trimLeft from "./module-vW_9.js";
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
