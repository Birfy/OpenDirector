import n from "./module-Md_14.js";
import o from "./module-F_15.js";
import { f as f_1 } from "./module-vV_14.js";
import a from "./module-wL_14.js";
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
