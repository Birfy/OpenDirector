import o from "AB";
import r from "sH";
import {
  DraftBuildReqConvertResult,
  IAgentDraftBuilder,
} from "./module-t5w.js";
require("./module-Rd.js").getOrCreateInterface(
  "builder_draft_builder",
  "DADraftBuildReq",
);
export class CutoutAgentDraftBuilder extends IAgentDraftBuilder {
  internalDraftBuilder() {
    return new r.DACutoutDraftBuilder();
  }
  convertAgentDraftReqToDraftBuildReq(e) {
    let t;
    let i = new r.DACutoutDraftReq({
      aigcGenType: o.DAAIGCGenerateType.cutout,
      cutoutInfo: (t = e.imageDraftReq) == null ? undefined : t.cutoutInfo,
    });
    return DraftBuildReqConvertResult.buildSucceedResult(i);
  }
}
