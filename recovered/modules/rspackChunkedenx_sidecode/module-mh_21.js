import n from "./module-A_22.js";
import globalThis from "./module-J_22.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
