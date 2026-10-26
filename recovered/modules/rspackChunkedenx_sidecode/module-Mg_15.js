import n from "./module-A_16.js";
import trimRight from "./module-e8_15.js";
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
