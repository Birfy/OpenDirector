import n from "./module-Md_6.js";
import o from "./module-F_7.js";
import { f as f_1 } from "./module-vV_6.js";
import i from "./module-wL_6.js";
const s =
  typeof window === "object" && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window)
    : [];
const c = (t) => {
  try {
    return f_1(t);
  } catch (t) {
    return i(s);
  }
};
export const f = function (t) {
  if (s && n(t) === "Window") {
    return c(t);
  }
  return f_1(o(t));
};
