import n from "./module-C.js";
import o from "./module-MR.js";
import { f as f_1 } from "./module-Fb_2.js";
import a from "./module-us_3.js";
const s =
  typeof window === "object" && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window)
    : [];
const u = (e) => {
  try {
    return f_1(e);
  } catch (e) {
    return a(s);
  }
};
export const f = function (e) {
  if (s && n(e) === "Window") {
    return u(e);
  }
  return f_1(o(e));
};
