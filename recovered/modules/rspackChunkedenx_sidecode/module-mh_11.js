import n from "./module-A_12.js";
import globalThis from "./module-J_12.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
