import n from "./module-A_18.js";
import trimRight from "./module-e8_17.js";
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
