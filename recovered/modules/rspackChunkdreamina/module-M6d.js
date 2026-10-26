import r from "Ut";
import n from "aS";
export function F(e) {
  let t;
  return (
    n.g(e) &&
    (r.isCreationAgentWeb((t = e.aigcMode) != null ? t : r.DAAIGCMode.none) ||
      e.aigcMode === r.DAAIGCMode.infiniteCanvas)
  );
}
