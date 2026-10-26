import r from "M8X";
import o from "xm3";
export var d = (e) => {
  var t;
  var { contentGeneratorManager } = r.cQ(e, o.V);
  var {
    data: { contentGeneratorType },
    visibleContentGeneratorInstance,
  } = contentGeneratorManager;
  if (
    (t =
      visibleContentGeneratorInstance == null
        ? undefined
        : visibleContentGeneratorInstance.environment.contentGeneratorType) !=
    null
  ) {
    return t;
  }
  return contentGeneratorType;
};
