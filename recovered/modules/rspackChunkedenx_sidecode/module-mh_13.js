import n from "./module-A_14.js";
import globalThis from "./module-J_14.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
