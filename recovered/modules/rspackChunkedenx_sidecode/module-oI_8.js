import n from "./module-Md_7.js";
import o from "./module-F_8.js";
import { f as f_1 } from "./module-vV_7.js";
import a from "./module-wL_7.js";
const s =
  typeof window === "object" && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window)
    : [];
const u = (r) => {
  try {
    return f_1(r);
  } catch (r) {
    return a(s);
  }
};
export const f = function (r) {
  if (s && n(r) === "Window") {
    return u(r);
  }
  return f_1(o(r));
};
