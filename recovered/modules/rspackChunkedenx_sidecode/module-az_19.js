import n from "./module-A_20.js";
import trimLeft from "./module-vW_19.js";
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
