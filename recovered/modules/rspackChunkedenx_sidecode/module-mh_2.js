import n from "./module-A_3.js";
import globalThis from "./module-J_3.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
