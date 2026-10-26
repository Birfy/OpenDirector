import n from "./module-A.js";
import globalThis from "./module-J.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
