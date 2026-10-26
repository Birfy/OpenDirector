import n from "./module-A_11.js";
import globalThis from "./module-J_11.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
