import n from "./module-A_7.js";
import globalThis from "./module-J_7.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
