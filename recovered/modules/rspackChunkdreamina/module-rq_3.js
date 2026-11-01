import { _7 } from "./module-pE.js";
export function C(e) {
  try {
    if (!Object.keys(e).some((e) => ["brush", "eraser"].includes(e))) {
      return e;
    }
    return {
      brush: e.brush,
      eraser: e.eraser,
    };
  } catch (e) {
    return _7;
  }
}
