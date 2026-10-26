import n from "./module-A_4.js";
import globalThis from "./module-J_4.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
