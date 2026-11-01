import $ from "./module-A_13.js";
import trimRight from "./module-e8_12.js";
$(
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
