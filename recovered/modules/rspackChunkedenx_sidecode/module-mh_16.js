import n from "./module-A_17.js";
import globalThis from "./module-J_17.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
