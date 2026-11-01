import $ from "./module-A_13.js";
import trimLeft from "./module-vW_12.js";
$(
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
