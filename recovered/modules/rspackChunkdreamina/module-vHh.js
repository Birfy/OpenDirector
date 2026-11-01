import r from "M8X";
import o from "xm3";
export var y = (e) => {
  var { contentGeneratorReportManager } = r.cQ(e, o.V);
  return contentGeneratorReportManager.commonParams;
};
export var c = (e, t) => {
  r.cQ(e, o.V).contentGeneratorReportManager.setCommonParams(t);
};
