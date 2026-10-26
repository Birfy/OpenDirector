import n from "./module-A_15.js";
import globalThis from "./module-J_15.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
