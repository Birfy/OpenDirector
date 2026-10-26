import $ from "./module-A_13.js";
import globalThis from "./module-J_13.js";
$(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
