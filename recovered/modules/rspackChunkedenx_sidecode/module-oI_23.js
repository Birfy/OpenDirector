import n from "./module-Md_22.js";
import i from "./module-F_23.js";
import { f as f_1 } from "./module-vV_22.js";
import s from "./module-wL_22.js";
const a =
  typeof window === "object" && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window)
    : [];
const u = (t) => {
  try {
    return f_1(t);
  } catch (t) {
    return s(a);
  }
};
export const f = function (t) {
  if (a && n(t) === "Window") {
    return u(t);
  }
  return f_1(i(t));
};
