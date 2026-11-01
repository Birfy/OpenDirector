import { X, c } from "./module-NaK.js";
export var V = (e) => {
  if (e == null ? undefined : e.length) {
    return e.map((e) => c(e)).filter((e) => e !== undefined);
  }
};
export var k = (e, t) => {
  if (e == null ? undefined : e.length) {
    return e.map((e) => X(e, t)).filter((e) => e !== undefined);
  }
};
