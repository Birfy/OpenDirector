import a from "Ut";
import n from "e3";
export var z = (e) => {
  var t;
  return (
    n.A(e) &&
    (a.isCreationAgentWeb((t = e.aigcMode) != null ? t : a.DAAIGCMode.none) ||
      e.aigcMode === a.DAAIGCMode.infiniteCanvas)
  );
};
