import { L } from "./module-Ux_2.js";
export var w = (e) =>
  e.find(
    (e) =>
      e.level === "standard" &&
      e.priceType === "auto" &&
      e.subscribeCycle === 1 &&
      L(e),
  );
