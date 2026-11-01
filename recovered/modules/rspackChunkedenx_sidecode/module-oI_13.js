import $ from "./module-Md_12.js";
import tt from "./module-F_13.js";
import { f as f_1 } from "./module-vV_2_2.js";
import tr from "./module-wL_12.js";
const tn =
  typeof window === "object" && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window)
    : [];
const ti = (J) => {
  try {
    return f_1(J);
  } catch (J) {
    return tr(tn);
  }
};
export const f = function (J) {
  if (tn && $(J) === "Window") {
    return ti(J);
  }
  return f_1(tt(J));
};
