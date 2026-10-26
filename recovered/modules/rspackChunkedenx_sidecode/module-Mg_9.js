import n from "./module-A_10.js";
import trimRight from "./module-e8_9.js";
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
