import n from "./module-A_12.js";
import trimRight from "./module-e8_11.js";
n(
  {
    target: "String",
    proto: true,
    name: "trimEnd",
    forced: trimRight !== undefined,
  },
  {
    trimRight,
  },
);
