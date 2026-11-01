import a from "Ut";
import { n } from "./module-sV8_2.js";
export function U(e) {
  let t;
  return (
    n(e) &&
    (a.isCreationAgentWeb((t = e.aigcMode) != null ? t : a.DAAIGCMode.none) ||
      e.aigcMode === a.DAAIGCMode.infiniteCanvas)
  );
}
