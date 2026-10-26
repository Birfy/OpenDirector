import n from "./module-A_16.js";
import globalThis from "./module-J_16.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
