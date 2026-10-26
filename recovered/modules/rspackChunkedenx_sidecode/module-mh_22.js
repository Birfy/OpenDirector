import n from "./module-A_23.js";
import globalThis from "./module-J_23.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
