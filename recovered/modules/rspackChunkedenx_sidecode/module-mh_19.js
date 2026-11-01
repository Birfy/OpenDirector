import n from "./module-A_20.js";
import globalThis from "./module-J_20.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
