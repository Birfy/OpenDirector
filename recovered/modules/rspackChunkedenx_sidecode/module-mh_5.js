import n from "./module-A_6.js";
import globalThis from "./module-J_6.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
