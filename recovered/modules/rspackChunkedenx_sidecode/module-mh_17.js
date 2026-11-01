import n from "./module-A_18.js";
import globalThis from "./module-J_18.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
