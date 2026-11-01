import n from "./module-A_21.js";
import globalThis from "./module-J_21.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
