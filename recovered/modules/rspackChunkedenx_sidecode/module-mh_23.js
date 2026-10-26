import n from "./module-A_24.js";
import globalThis from "./module-J_24.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
