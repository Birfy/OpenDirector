import n from "./module-g.js";
import globalThis from "./module-u.js";
n(
  {
    global: true,
    forced: globalThis.globalThis !== globalThis,
  },
  {
    globalThis,
  },
);
