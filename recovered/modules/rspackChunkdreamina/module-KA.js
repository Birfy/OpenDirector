import n from "Ut";
import r from "ad";
import { v } from "./module-d1Q.js";
export function f(e, t) {
  const i = v(e);
  if ((i == null ? undefined : i.mode) === n.DAGenerateTTSMode.UnifiedEdit) {
    return r.oy(i.unifiedEditInput, t);
  }
}
