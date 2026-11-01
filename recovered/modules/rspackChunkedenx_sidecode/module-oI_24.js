import n from "./module-Md_23.js";
import o from "./module-F_24.js";
import { f as f_1 } from "./module-vV_23.js";
import a from "./module-wL_23.js";
const s =
  typeof window === "object" && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window)
    : [];
const c = (t) => {
  try {
    return f_1(t);
  } catch (t) {
    return a(s);
  }
};
export const f = function (t) {
  if (s && n(t) === "Window") {
    return c(t);
  }
  return f_1(o(t));
};
