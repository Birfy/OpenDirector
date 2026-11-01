import o from "AB";
import r from "HS";
import a from "Pb";
import n from "xc";
import s from "b4";
import {
  DraftBuildReqConvertResult,
  IAgentDraftBuilder,
} from "./module-t5w.js";
require("./module-Rd.js").getOrCreateInterface(
  "builder_draft_builder",
  "DADraftBuildReq",
);
export class ImageProHDAgentDraftBuilder extends IAgentDraftBuilder {
  internalDraftBuilder() {
    return new s.DAImageProHDDraftBuilder();
  }
  convertAgentDraftReqToDraftBuildReq(e) {
    let t;
    let i;
    let l;
    let p;
    let u = (t = e.imageDraftReq) == null ? undefined : t.blendImageUri;
    if (u === undefined || u.length === 0) {
      e.agentGenerateType != undefined && e.agentGenerateType;
      return DraftBuildReqConvertResult.buildErrorResult(
        `\u{539F}\u{56FE} uri \u{4E3A}\u{7A7A}: req=${e.agentGenerateType}`,
      );
    }
    let proHDInfo = (i = e.imageDraftReq) == null ? undefined : i.proHDInfo;
    if (proHDInfo === undefined || proHDInfo.resolutionType === undefined) {
      e.agentGenerateType != undefined && e.agentGenerateType;
      return DraftBuildReqConvertResult.buildErrorResult(
        `\u{667A}\u{80FD}\u{8D85}\u{6E05}\u{76EE}\u{6807}\u{5206}\u{8FA8}\u{7387}\u{4E3A}\u{7A7A}: req=${e.agentGenerateType}`,
      );
    }
    l = new r.DAImageResource();
    l.uri = u;
    l.sourceFrom = a.DAResourceSourceFrom.upload;
    let originImage = l;
    p = new n.DARefInfo();
    p.aigcGenType = o.DAAIGCGenerateType.proHD;
    let refInfo = p;
    let g = new s.DAImageProHDDraftReq({
      aigcGenType: o.DAAIGCGenerateType.proHD,
      originImage,
      proHDInfo,
      refInfo,
    });
    return DraftBuildReqConvertResult.buildSucceedResult(g);
  }
}
