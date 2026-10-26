import n from "./module-A_9.js";
import globalThis from "./module-J_9.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
