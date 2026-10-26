import n from "./module-A_22.js";
import trimRight from "./module-e8_21.js";
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
