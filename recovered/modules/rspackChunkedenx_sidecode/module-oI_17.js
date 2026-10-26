import n from "./module-Md_16.js";
import o from "./module-F_17.js";
import { f as f_1 } from "./module-vV_16.js";
import a from "./module-wL_16.js";
const s =
  typeof window === "object" && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window)
    : [];
const u = (t) => {
  try {
    return f_1(t);
  } catch (t) {
    return a(s);
  }
};
export const f = function (t) {
  if (s && n(t) === "Window") {
    return u(t);
  }
  return f_1(o(t));
};
