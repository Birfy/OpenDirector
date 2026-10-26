import o from "AB";
import r from "xc";
import a from "Ch";
import {
  DraftBuildReqConvertResult,
  IAgentDraftBuilder,
} from "./module-t5w.js";
import { AgentGenerateType } from "./module-Aa.js";
require("./module-Rd.js").getOrCreateInterface(
  "builder_draft_builder",
  "DADraftBuildReq",
);
export class ImagePaintingAgentDraftBuilder extends IAgentDraftBuilder {
  internalDraftBuilder() {
    return new a.DAPaintingDraftBuilder();
  }
  convertAgentDraftReqToDraftBuildReq(e) {
    let t;
    let i;
    let d;
    let aigcGenType;
    let p;
    let refImageUri =
      (t = e.imageDraftReq) == null ? undefined : t.blendImageUri;
    if (refImageUri === undefined || refImageUri.length === 0) {
      let t =
        e.agentGenerateType != undefined
          ? `${e.agentGenerateType}`
          : "undefined";
      return DraftBuildReqConvertResult.buildErrorResult(
        `\u{53C2}\u{8003}\u{56FE} uri \u{4E3A}\u{7A7A}: req=${t}`,
      );
    }
    switch (e.agentGenerateType) {
      case AgentGenerateType.paintingImageFineTune:
        aigcGenType = o.DAAIGCGenerateType.imageFineTune;
        break;
      case AgentGenerateType.paintingImageExtend:
        aigcGenType = o.DAAIGCGenerateType.imageExtend;
        break;
      case AgentGenerateType.paintingImageReconstruct:
        aigcGenType = o.DAAIGCGenerateType.imageReconstruct;
        break;
      default:
        let c =
          e.agentGenerateType != undefined
            ? `${e.agentGenerateType}`
            : "undefined";
        return DraftBuildReqConvertResult.buildErrorResult(
          `\u{6682}\u{672A}\u{652F}\u{6301}\u{7684}\u{56FE}\u{50CF}\u{7ED8}\u{5236}\u{7C7B}\u{578B}: req=${c}`,
        );
    }
    p = new r.DARefInfo();
    p.aigcGenType = aigcGenType;
    let refInfo = p;
    let v = new a.DAPaintingDraftReq({
      aigcGenType,
      prompt: (i = e.imageDraftReq) == null ? undefined : i.prompt,
      targetImageInfo:
        (d = e.imageDraftReq) == null ? undefined : d.targetImageInfo,
      strength: 0.5,
      refImageUri,
      maskUri: "",
      refInfo,
    });
    return DraftBuildReqConvertResult.buildSucceedResult(v);
  }
}
