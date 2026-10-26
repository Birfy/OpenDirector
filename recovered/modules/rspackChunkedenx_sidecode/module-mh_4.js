import n from "./module-A_5.js";
import globalThis from "./module-J_5.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
