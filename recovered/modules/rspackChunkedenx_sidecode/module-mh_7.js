import n from "./module-A_8.js";
import globalThis from "./module-J_8.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
