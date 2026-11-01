import a from "Ut";
import n from "aS";
export function F(e) {
  let t;
  return (
    n.g(e) &&
    (a.isCreationAgentWeb((t = e.aigcMode) != null ? t : a.DAAIGCMode.none) ||
      e.aigcMode === a.DAAIGCMode.infiniteCanvas)
  );
}
